from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
import joblib
import pandas as pd
from datetime import datetime
import json
from scipy.interpolate import interp1d


app = Flask(__name__)

# Load models and scalers
model_data_directory = 'ml-model/model_data'
scaler_data_directory = 'ml-model/scaler_data'
models_and_scalers = {
    'y1': ('model_y1.h5', 'scaler_y1.joblib'),
    'y12': ('model_y12.h5', 'scaler_y12.joblib'),
    'y14': ('model_y14.h5', 'scaler_y14.joblib')
}
models, scalers = {}, {}
for key, (model_file, scaler_file) in models_and_scalers.items():
    models[key] = load_model(f'{model_data_directory}/{model_file}')
    scalers[key] = joblib.load(f'{scaler_data_directory}/{scaler_file}')

# Function to read CSV files and rename columns


def interpolate_prediction(predictions, future_time):
    """
    Interpolate to get a prediction at a specific future time.

    Parameters:
    - predictions: A list of predicted values.
    - future_time: The time in the future (in minutes) for which the prediction is needed.

    Returns:
    - interpolated_value: The interpolated prediction value for the specified future time.
    """
    # Define the times corresponding to the predictions (e.g., 5, 10, 15, ... minutes into the future)
    future_times = [5, 10, 15, 20, 25, 30]

    # Ensure the predictions list is flattened (in case it's nested)
    flattened_predictions = [val for sublist in predictions for val in sublist]

    # Create the interpolator function
    interpolator = interp1d(
        future_times, flattened_predictions, kind='linear', fill_value='extrapolate')

    # Interpolate to get the prediction for the specified future time
    # Convert to native Python type
    interpolated_value = interpolator(future_time).item()

    return interpolated_value


def read_garage_data(file_names):
    dataframes = {}
    for i, file_name in enumerate(file_names):
        df = pd.read_csv(file_name, parse_dates=['ts'], index_col='ts')
        occupancy_column = 'y1' if i == 0 else f'y1{i*10+2}'
        df.rename(columns={occupancy_column: f'garage{i+1}'}, inplace=True)
        dataframes[f'garage{i+1}'] = df
    return dataframes

# Function to get occupancy data


def get_occupancy_data(day, time, entries_count):
    if day is None or time is None:
        return {'error': 'Missing day or time parameter'}, 400
    print(day)
    print(time)
    try:
        occupancy_info = {}
        for garage_id, garage_df in garage_dataframes.items():
            filtered_day_data = garage_df[garage_df.index.dayofweek == day]
            try:
                pos = filtered_day_data.index.get_loc(
                    filtered_day_data.at_time(time).index[0])
            except KeyError:
                occupancy_info[garage_id] = 'No data'
                continue

            start_pos = max(0, pos - (entries_count - 1))
            occupancy_data_slice = filtered_day_data.iloc[start_pos:pos + 1]

            occupancy_info[garage_id] = [
                {
                    'timestamp': timestamp.strftime('%Y-%m-%d %H:%M:%S'),
                    'occupancy': row[garage_df.columns[0]]
                } for timestamp, row in occupancy_data_slice.iterrows()
            ] if not occupancy_data_slice.empty else 'No data'

        return {'occupancy': occupancy_info}, 200
    except Exception as e:
        return {'error': str(e)}, 500


# Load the data
file_names = ['ml-model/data/Sign1_full_fitted.csv',
              'ml-model/data/Sign12_full_fitted.csv',
              'ml-model/data/Sign14_full_fitted.csv']
garage_dataframes = read_garage_data(file_names)

# Endpoint to fetch live data


def fetch_data(day, time, entries_count=5):
    result, status_code = get_occupancy_data(day, time, entries_count)
    if status_code == 200:
        return result
    else:
        return {'error': result}


def preprocess_data(garage_data, target_column, scaler):
    """
    Preprocess the input data for a single garage.

    Parameters:
    - garage_data: list of dictionaries, each containing 'timestamp' and target_column for a garage
    - target_column: the name of the target column in the data
    - scaler: an instance of sklearn's MinMaxScaler or similar

    Returns:
    - processed_data: A 2D list where each inner list contains scaled occupancy, day of the week, and time of day
    """
    # Convert list of dictionaries to DataFrame
    df = pd.DataFrame(garage_data)
    df['ts'] = pd.to_datetime(df['timestamp'])

    # Extract day of the week and time of the day as features
    df['day_of_week'] = df['ts'].dt.dayofweek
    df['time_of_day'] = df['ts'].dt.hour + df['ts'].dt.minute / 60

    # Scale the target column
    df[target_column] = scaler.fit_transform(df[[target_column]])

    # Initialize the processed data list
    processed_data = []

    # Create and append the formatted data
    for i in range(len(df)):
        processed_data.append(
            [df[target_column].iloc[i], df['day_of_week'].iloc[i], df['time_of_day'].iloc[i]])

    return processed_data

# Testing endpoint for fetching occupancy data


@app.route('/test_occupancy', methods=['GET'])
def test_occupancy():
    try:
        # Extracting query parameters
        day = request.args.get('day', type=int)
        time = request.args.get('time')

        entries_count = request.args.get('entries', default=50, type=int)

        # Validate day and time
        if day is None or time is None:
            return jsonify({'error': 'Missing day or time parameter'}), 400

        # Call the get_occupancy_data function
        result, status_code = get_occupancy_data(day, time, entries_count)
        return jsonify(result), status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Prediction endpoint


@app.route('/predict', methods=['POST'])
def predict():
    # Generate the current timestamp
    current_timestamp = datetime.now()

    # Extract day and time from current_timestamp
    day = current_timestamp.weekday()
    time = current_timestamp.strftime('%H:%M')

    # Fetch live data
    live_data = fetch_data(day, time)

    # Debug print: Check the structure of live_data
    print("Fetched live_data:", live_data)

    # Mapping garage IDs to model/scaler keys
    garage_id_mapping = {
        'garage1': 'y1',
        'garage2': 'y12',
        'garage3': 'y14'
    }

    data = request.json

    # Ensure live_data has 'occupancy' key and it's not empty
    if 'occupancy' not in live_data or not live_data['occupancy']:
        print("No occupancy data found in live_data")
        return jsonify({'error': 'No occupancy data found'}), 400

    # Prepare the data and make predictions
    garage_details = {}
    for garage_id, garage_data in live_data['occupancy'].items():
        model_key = garage_id_mapping.get(garage_id)
        if model_key and model_key in models_and_scalers:
            model, scaler = models[model_key], scalers[model_key]

            # Preprocess the data for the current garage
            processed_data = preprocess_data(garage_data, 'occupancy', scaler)

            # Convert processed data to the format expected by the model
            input_data = np.array([processed_data])

            # Make prediction
            time_to_garage = data.get(garage_id)

            prediction = model.predict(input_data)
            interpolated_value = interpolate_prediction(
                prediction, time_to_garage)
            unscaled_value = scaler.inverse_transform(
                [[interpolated_value]])[0][0]

            garage_details[garage_id] = {
                "travel_time": time_to_garage,
                "expected_occupancy": unscaled_value
            }

    # Construct the final response
    response_data = {
        "user": 1,  # Assuming a static user ID for now
        "recommendation": "TEMP",  # Placeholder for recommendation
        "garage1": garage_details.get('garage1', {}),
        "garage2": garage_details.get('garage2', {}),
        "garage3": garage_details.get('garage3', {})
    }

    # Print final response for debugging purposes
    print("Response Data:", response_data)

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)

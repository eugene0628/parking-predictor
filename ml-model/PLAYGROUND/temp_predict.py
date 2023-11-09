import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
import joblib

# Function to preprocess new data for prediction
def preprocess_data_for_prediction(df, target_column, scaler, sequence_length=5):
    """
    Preprocess new input data for prediction.

    Parameters:
    - df: pandas DataFrame containing the 'ts' and target_column columns
    - target_column: the name of the target column in the DataFrame
    - scaler: an instance of sklearn's MinMaxScaler or similar
    - sequence_length: the number of previous time steps to use as input features

    Returns:
    - X: The input features for the LSTM model
    """
    # Convert timestamps to pandas datetime
    df['ts'] = pd.to_datetime(df['ts'])

    # Extract day of the week and time of the day as features
    df['day_of_week'] = df['ts'].dt.dayofweek
    df['time_of_day'] = df['ts'].dt.hour + df['ts'].dt.minute / 60

    # Scale the target column
    df[target_column + '_scaled'] = scaler.transform(df[[target_column]])

    # Initialize X
    X = []

    # Create sequences of past observations as input features
    for i in range(sequence_length, len(df)):
        X.append(df[[target_column + '_scaled', 'day_of_week', 'time_of_day']].iloc[i-sequence_length:i].values)

    # Convert to numpy arrays
    X = np.array(X)

    return X

# File paths, corresponding target column names, and model names
file_info = {
    'Sign1_full_fitted.csv': {'target_column': 'y1', 'model_name': 'model_Sign1_full_fitted.csv.h5', 'scaler_name': 'scaler_Sign1_full_fitted.csv.joblib'},
    'Sign12_full_fitted.csv': {'target_column': 'y12', 'model_name': 'model_Sign12_full_fitted.csv.h5', 'scaler_name': 'scaler_Sign12_full_fitted.csv.joblib'},
    'Sign14_full_fitted.csv': {'target_column': 'y14', 'model_name': 'model_Sign14_full_fitted.csv.h5', 'scaler_name': 'scaler_Sign14_full_fitted.csv.joblib'}
}


# Process each file
for file_name, info in file_info.items():
    print(f"Processing {file_name}...")
    
    # Load the trained model
    model = load_model(info['model_name'])
    print("Model loaded successfully.")

    # Load the scaler
    scaler = joblib.load(info['scaler_name'])
    print("Scaler loaded successfully.")

    # Load the original data
    original_data = pd.read_csv(file_name)

    # Preprocess the data for prediction
    X_new = preprocess_data_for_prediction(
        original_data, info['target_column'], scaler, sequence_length=5)

    # Make predictions
    predictions_scaled = model.predict(X_new)

    # Inverse transform the predictions to get them back to the original scale
    predictions = scaler.inverse_transform(predictions_scaled)

    # Display the predictions
    print("Predictions for " + file_name + ":")
    print(predictions)
    print("\n")

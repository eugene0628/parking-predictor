import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
import joblib

# Load the trained model
model = load_model('model_one.h5')
print("Model loaded successfully.")

# Load the scaler
scaler = joblib.load('scaler_one.joblib')
print("Scaler loaded successfully.")

# Function to preprocess new data for prediction


def preprocess_data_for_prediction(df, scaler, sequence_length=5):
    """
    Preprocess new input data for prediction.

    Parameters:
    - df: pandas DataFrame containing the 'ts' and 'y1' columns
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

    # Scale the 'y1' column which represents the number of open spaces
    df['y1_scaled'] = scaler.transform(df[['y1']])

    # Initialize X
    X = []

    # Create sequences of past observations as input features
    for i in range(sequence_length, len(df)):
        X.append(df[['y1_scaled', 'day_of_week', 'time_of_day']
                    ].iloc[i-sequence_length:i].values)

    # Convert to numpy arrays
    X = np.array(X)

    return X


original_data = pd.read_csv('../Sign1_full_fitted.csv')

X_new = preprocess_data_for_prediction(
    original_data, scaler, sequence_length=5)

# The number of predictions made
num_predictions = X_new.shape[0]

# Make predictions
predictions_scaled = model.predict(X_new)

# Print the number of predictions
print(f"Making {num_predictions} predictions.")

# Inverse transform the predictions to get them back to the original scale
predictions = scaler.inverse_transform(predictions_scaled)

sequence_length = 5
forecast_horizon = 6

start_idx = sequence_length
for i, prediction in enumerate(predictions):
    # Assuming forecast_horizon is 6 for 30 min
    future_indices = [start_idx + j for j in range(0, forecast_horizon * 5, 5)]
    actual_values = original_data['y1'].iloc[future_indices].values
    print(f"Prediction for the next 30 minutes: {prediction}")
    print(f"Actual values for the next 30 minutes: {actual_values}\n")
    start_idx += 1  # Assuming we step one minute at a time for each prediction

# Display the predictions
print("Predictions:")
print(predictions)

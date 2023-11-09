
# Import the necessary libraries
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from sklearn.model_selection import TimeSeriesSplit
import joblib


def preprocess_data(df, scaler, sequence_length=5, forecast_horizon=6, step_size=5):
    """
    Preprocess the input data.

    Parameters:
    - df: pandas DataFrame containing the 'ts' and 'y1' columns
    - scaler: an instance of sklearn's MinMaxScaler or similar
    - sequence_length: the number of previous time steps to use as input features
    - forecast_horizon: the number of future time steps to predict

    Returns:
    - X: The input features for the LSTM model
    - y: The target variables for the LSTM model
    """
    # Convert timestamps to pandas datetime
    df['ts'] = pd.to_datetime(df['ts'])

    # Extract day of the week and time of the day as features
    df['day_of_week'] = df['ts'].dt.dayofweek
    df['time_of_day'] = df['ts'].dt.hour + df['ts'].dt.minute / 60

    # Scale the 'y1' column which represents the number of open spaces
    df['y1'] = scaler.fit_transform(df[['y1']])

    # Initialize X and y
    X, y = [], []

    # Create sequences of past observations as input features and future values as targets
    for i in range(sequence_length, len(df) - (forecast_horizon*step_size)):
        X.append(df[['y1', 'day_of_week', 'time_of_day']
                    ].iloc[i-sequence_length:i].values)
        y.append(
            df['y1'].iloc[i:i + (forecast_horizon * step_size):step_size].values)

    # Convert to numpy arrays
    X = np.array(X)
    y = np.array(y)

    return X, y


# Load the data
print("Loading data...")
data = pd.read_csv('../Sign1_full_fitted.csv')
print("Data loaded successfully.")

# Initialize the scaler
scaler = MinMaxScaler(feature_range=(0, 1))
print("Scaler initialized.")

# Preprocess the data
print("Preprocessing data...")
X, y = preprocess_data(data, scaler)
print("Data preprocessing complete.")

# Output the shapes of our inputs and outputs
print(f"Shape of input features (X): {X.shape}")
print(f"Shape of target (y): {y.shape}")

forecast_horizon = 6

# Define the LSTM model
print("Defining the LSTM model...")
model = Sequential([
    LSTM(50, activation='relu', input_shape=(X.shape[1], X.shape[2])),
    Dense(forecast_horizon)
])
print("Model defined.")

# Compile the model
print("Compiling the model...")
model.compile(optimizer='adam', loss='mean_squared_error')
print("Model compiled.")

# Define callbacks
print("Defining callbacks...")
early_stopping = EarlyStopping(monitor='val_loss', patience=10)
model_checkpoint = ModelCheckpoint('best_model_one.h5', save_best_only=True)
print("Callbacks defined.")

# Fit the model using TimeSeriesSplit for time-based validation
print("Starting model training with TimeSeriesSplit...")
tscv = TimeSeriesSplit(n_splits=5)
for train_index, test_index in tscv.split(X):
    print(f"Training fold...")
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]
    model.fit(X_train, y_train, epochs=100, validation_data=(
        X_test, y_test), callbacks=[early_stopping, model_checkpoint])
    print(f"Fold training completed.")
print("Model training complete.")

# Save the model
print("Saving the model...")
model.save('model_one.h5')
print("Model saved to model_one.h5.")

# Save the scaler
print("Saving the scaler...")
joblib.dump(scaler, 'scaler_one.joblib')
print("Scaler saved to scaler_one.joblib.")

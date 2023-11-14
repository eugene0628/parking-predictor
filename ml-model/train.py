
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import pickle
# from matplotlib import pyplot as plt

def load_and_preprocess_data(filepath, unique_id, column_name):
    data = pd.read_csv(filepath, usecols=[0, 1], header=0)
    data['ts'] = pd.to_datetime(data['ts'])
    data['unique_id'] = unique_id
    data = data.rename(columns={'ts': 'ds', column_name: 'y'})
    return data

def create_sliding_window(df, past_points=3, future_points=2, target_col='y'):
    n = len(df)
    cols = [target_col + f"_{i}" for i in range(-past_points, future_points)]
    sliding_window_df = pd.DataFrame(columns=cols)
    
    for i in range(past_points, n - future_points + 1):
        window_data = df[target_col].iloc[i-past_points:i+future_points].values
        sliding_window_df.loc[i] = window_data

    return sliding_window_df

def generate_features_labels(df, past_points=3, future_points=2):
    feature_cols = [col for col in df.columns if int(col.split("_")[-1]) < 0]
    label_cols = [col for col in df.columns if int(col.split("_")[-1]) >= 0]
    
    X = df[feature_cols]
    y = df[label_cols]
    
    return X, y

def train_predictive_model(X, y):
    model = LinearRegression()
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    print(f"Mean Squared Error: {mse}")
    return model

def main_pipeline(filepath, unique_id, column_name, past_points=3, future_points=2):
    data = load_and_preprocess_data(filepath, unique_id, column_name)
    sliding_window_df = create_sliding_window(data, past_points, future_points, "y")
    X, y = generate_features_labels(sliding_window_df, past_points, future_points)
    model = train_predictive_model(X, y)
    model_filename = f"{unique_id}_model.pkl"
    with open(model_filename, "wb") as f:
        pickle.dump(model, f)
    print(f"Trained model saved as {model_filename}")

main_pipeline("Sign1_full_fitted.csv", "garage1", "y1")
main_pipeline("Sign12_full_fitted.csv", "garage2", "y12")
main_pipeline("Sign14_full_fitted.csv", "garage3", "y14")

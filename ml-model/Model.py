# Load data
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
from sklearn.metrics import mean_absolute_error, mean_squared_error
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.ensemble import RandomForestRegressor, ExtraTreesRegressor
from numba import njit
from window_ops.rolling import rolling_mean
from mlforecast import MLForecast


# Parking Garage 1 
path1 = 'Sign1_full_fitted.csv'
data1 = pd.read_csv(path1, usecols=[0,1], header=0)
data1['ts'] = pd.to_datetime(data1['ts'])
data1['unique_id'] = 'garage1'
data1 = data1.rename(columns={'ts': 'ds', 'y1': 'y'})
# print(data1)
data1.plot(x = 'ds', y = 'y')

# Parking Garage 2 
path2 = 'Sign12_full_fitted.csv'
data2 = pd.read_csv(path2, usecols=[0,1], header=0)
data2['ts'] = pd.to_datetime(data2['ts'])
data2['unique_id'] = 'garage1'
data2 = data2.rename(columns={'ts': 'ds', 'y12': 'y'})
# print(data2)
data2.plot(x = 'ds', y = 'y')

# Parking Garge 3 
path4 = 'Sign14_full_fitted.csv'
data4 = pd.read_csv(path4, usecols=[0,1], header=0)
# print(data4)



train = data1.loc[:,:]
valid = data2.loc[:,:]

from sklearn.ensemble import RandomForestRegressor, ExtraTreesRegressor

models = [RandomForestRegressor(random_state=0, n_estimators=100),
          ExtraTreesRegressor(random_state=0, n_estimators=100)]


from numba import njit

@njit
def diff(x, lag):
    x2 = np.full_like(x, np.nan)
    for i in range(lag, len(x)):
        x2[i] = x[i] - x[i-lag]
    return x2



from window_ops.rolling import rolling_mean
from mlforecast import MLForecast

model = MLForecast(models=models,
                   freq='MIN',
                   lags=[1,7,14],
                   lag_transforms={
                       1: [(rolling_mean, 3), (rolling_mean, 7), (rolling_mean, 28), (diff, 1), (diff, 7)],
                   }
                  )


model.fit(train, id_col='unique_id', time_col='ds', target_col='y', static_features=[])

p = model.predict(horizon=90, dynamic_dfs=[valid[['unique_id', 'ds']]])
p = p.merge(valid[['unique_id', 'ds', 'y']], on=['unique_id', 'ds'], how='left')

model.preprocess(train, id_col='unique_id', time_col='ds', target_col='y', static_features=[])


pd.Series(model.models_['RandomForestRegressor'].feature_importances_, index=model.ts.features_order_).sort_values(ascending=False).plot.bar(
            figsize=(1280/96,720/96), title='RandomForestRegressor Feature Importance', xlabel='Features', ylabel='Importance')


train = data1.copy()
valid = data2.copy()

# Extracting features and target variables for initial models
X_train_initial = train[['ds']]  # For now, just using date as feature, but you can expand this
y_train_initial = train['y']

X_valid_initial = valid[['ds']]
y_valid_initial = valid['y']

models = {
    'RandomForestRegressor': RandomForestRegressor(random_state=0, n_estimators=100),
    'ExtraTreesRegressor': ExtraTreesRegressor(random_state=0, n_estimators=100)
}

predictions_initial = valid[['ds', 'y']].copy()

for model_name, model_instance in models.items():
    model_instance.fit(X_train_initial, y_train_initial)
    predictions_initial[f'prediction_{model_name}'] = model_instance.predict(X_valid_initial)
    mae = mean_absolute_error(predictions_initial['y'], predictions_initial[f'prediction_{model_name}'])
    mse = mean_squared_error(predictions_initial['y'], predictions_initial[f'prediction_{model_name}'])
    print(f"Initial MAE for {model_name}: {mae}")
    print(f"Initial MSE for {model_name}: {mse}")
    print("-" * 40)

















# from sklearn.metrics import mean_absolute_error, mean_squared_error



# import pandas as pd
# from sklearn.metrics import mean_absolute_error, mean_squared_error
# from sklearn.ensemble import RandomForestRegressor, ExtraTreesRegressor

# # Define the function to create features
# def create_features(df):
#     # Lag features
#     for lag in [1, 7, 14, 28]:
#         df[f'lag_{lag}'] = df['y'].shift(lag)

#     # Rolling mean features
#     for window in [3, 7, 28]:
#         df[f'rolling_mean_{window}'] = df['y'].rolling(window=window).mean()

#     # Diff features
#     for diff_lag in [1, 7]:
#         df[f'diff_{diff_lag}'] = df['y'].diff(diff_lag)

#     return df.dropna().reset_index(drop=True)

# data1 = create_features(data1)
# data2 = create_features(data2)

# train = data1.copy()
# valid = data2.copy()

# X_train = train.drop(['y', 'ds', 'unique_id'], axis=1)
# y_train = train['y']
# X_valid = valid.drop(['y', 'ds', 'unique_id'], axis=1)
# y_valid = valid['y']

# # Model definitions
# models = {
#     'RandomForestRegressor': RandomForestRegressor(random_state=0, n_estimators=100),
#     'ExtraTreesRegressor': ExtraTreesRegressor(random_state=0, n_estimators=100)
# }

# predictions = valid[['ds', 'y']].copy()

# # Fit models and make predictions
# for model_name, model in models.items():
#     model.fit(X_train, y_train)
#     predictions[f'prediction_{model_name}'] = model.predict(X_valid)

# # Evaluate the models
# for model_name in models:
#     mae = mean_absolute_error(predictions['y'], predictions[f'prediction_{model_name}'])
#     mse = mean_squared_error(predictions['y'], predictions[f'prediction_{model_name}'])
#     print(f"MAE for {model_name}: {mae}")
#     print(f"MSE for {model_name}: {mse}")
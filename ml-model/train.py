import pandas as pd
import numpy as np
import pickle

def load_and_preprocess_data(filepath, unique_id, column_name):
    data = pd.read_csv(filepath, usecols=[0,1], header=0)
    data['ts'] = pd.to_datetime(data['ts'])
    data['unique_id'] = unique_id
    data = data.rename(columns={'ts': 'ds', column_name: 'y'})
    return data

data1 = load_and_preprocess_data('Sign1_full_fitted.csv', 'garage1', 'y1')
data2 = load_and_preprocess_data('Sign12_full_fitted.csv', 'garage2', 'y12')
data3 = load_and_preprocess_data('Sign14_full_fitted.csv', 'garage3', 'y14')

df = pd.concat([data1, data2, data3])
df['ds'] = pd.to_datetime(df['ds'])

train = df.loc[df['ds'] < '2016-11-17']
valid = df.loc[(df['ds'] >= '2016-11-17')]

h = valid['ds'].nunique()

from lightgbm import LGBMRegressor
from mlforecast import MLForecast

from window_ops.rolling import rolling_mean, rolling_max, rolling_min

models = [LGBMRegressor(random_state=0, n_estimators=100)]

model = MLForecast(models=models,
                   freq='T',
                   lags=[1440],
                   date_features=['dayofweek'],
                   )

model.fit(train, id_col='unique_id', time_col='ds', target_col='y', static_features=[])

pickle.dump(model, open('model.pkl', 'wb'))

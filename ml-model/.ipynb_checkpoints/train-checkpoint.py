import pandas as pd
import numpy as np
import pickle
# from matplotlib import pyplot as plt

path1 = 'Sign1_full_fitted.csv'
data1 = pd.read_csv(path1, usecols=[0,1], header=0)
data1['ts'] = pd.to_datetime(data1['ts'])
data1['unique_id'] = 'garage1'
data1 = data1.rename(columns={'ts': 'ds', 'y1': 'y'})

path2 = 'Sign12_full_fitted.csv'
data2 = pd.read_csv(path2, usecols=[0,1], header=0)
data2['ts'] = pd.to_datetime(data2['ts'])
data2['unique_id'] = 'garage2'
data2 = data2.rename(columns={'ts': 'ds', 'y12': 'y'})

path3 = 'Sign14_full_fitted.csv'
data3 = pd.read_csv(path3, usecols=[0,1], header=0)
data2['ts'] = pd.to_datetime(data3['ts'])
data3['unique_id'] = 'garage3'
data3 = data3.rename(columns={'ts': 'ds', 'y14': 'y'})

df = pd.concat([data1, data2, data3])
df['ds'] = pd.to_datetime(df['ds'])
df = df.drop('ts', axis=1)

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

p = model.predict(horizon=h)

last_values = p.groupby('unique_id').last()

print(last_values)
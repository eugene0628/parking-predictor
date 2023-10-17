import pickle
import mlforecast

pickled_model = pickle.load(open('model.pkl', 'rb'))
p = pickled_model.predict(horizon=20)

last_values = p.groupby('unique_id').last()

print(last_values)
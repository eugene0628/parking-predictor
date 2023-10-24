import pickle
import mlforecast
import sys
from flask import Flask, jsonify, request


pickled_model = pickle.load(open('ml-model/model.pkl', 'rb'))

app = Flask(__name__)


@app.route("/", methods=['GET'])
def predict():
    garage1 = int(request.args.get('garage1'))
    garage2 = int(request.args.get('garage2'))
    garage3 = int(request.args.get('garage3'))
    try:
        horizon = max(garage1, garage2, garage3)
        p = pickled_model.predict(horizon=horizon)
        grouped = p.groupby('unique_id')

        garage1_expected = int(grouped.get_group(
            'garage1')['LGBMRegressor'].iloc[garage1 - 1])
        garage2_expected = int(grouped.get_group(
            'garage2')['LGBMRegressor'].iloc[garage2 - 1])
        garage3_expected = int(grouped.get_group(
            'garage3')['LGBMRegressor'].iloc[garage3 - 1])

        last_values = grouped.last()

        data = {
            "user": 1,
            "recommendation": "TEMP",
            "garage1": {"travel_time": garage1, "expected_occupancy": garage1_expected},
            "garage2": {"travel_time": garage2, "expected_occupancy": garage2_expected},
            "garage3": {"travel_time": garage3, "expected_occupancy": garage3_expected}
        }
        print(data)
        response = jsonify(data)
        return response
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == 'main':
    app.run()

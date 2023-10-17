import pickle
import mlforecast
import sys
from flask import Flask, jsonify, request


pickled_model = pickle.load(open('ml-model/model.pkl', 'rb'))

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def predict():
    horizon = int(request.args.get('horizon'))
    try:
        p = pickled_model.predict(horizon=horizon)


        last_values = p.groupby('unique_id').last()

        data = {
            "user":1,
            "recommendation":"TEMP",
            "garage1": {"travel_time": horizon,"expected_occupancy":int(last_values.iloc[0,1])},
            "garage2":{"travel_time": horizon,"expected_occupancy":int(last_values.iloc[1,1])},
            "garage3":{"travel_time": horizon,"expected_occupancy":int(last_values.iloc[2,1])}
        }
        response = jsonify(data)
        return response
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == 'main':
    app.run()
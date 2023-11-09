from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Function to read CSV files and rename columns


def read_garage_data(file_names):
    dataframes = {}
    for i, file_name in enumerate(file_names):
        df = pd.read_csv(file_name, parse_dates=['ts'], index_col='ts')
        occupancy_column = 'y1' if i == 0 else f'y1{i*10+2}'
        df.rename(columns={occupancy_column: f'garage{i+1}'}, inplace=True)
        dataframes[f'garage{i+1}'] = df
    return dataframes

# Function to get occupancy data


def get_occupancy_data(day, time, entries_count):
    if day is None or time is None:
        return {'error': 'Missing day or time parameter'}, 400

    try:
        occupancy_info = {}
        for garage_id, garage_df in garage_dataframes.items():
            filtered_day_data = garage_df[garage_df.index.dayofweek == day]
            try:
                pos = filtered_day_data.index.get_loc(
                    filtered_day_data.at_time(time).index[0])
            except KeyError:
                occupancy_info[garage_id] = 'No data'
                continue

            start_pos = max(0, pos - (entries_count - 1))
            occupancy_data_slice = filtered_day_data.iloc[start_pos:pos + 1]

            occupancy_info[garage_id] = [
                {
                    'timestamp': timestamp.strftime('%Y-%m-%d %H:%M:%S'),
                    'occupancy': row[garage_df.columns[0]]
                } for timestamp, row in occupancy_data_slice.iterrows()
            ] if not occupancy_data_slice.empty else 'No data'
        return {'occupancy': occupancy_info}, 200
    except Exception as e:
        return {'error': str(e)}, 500

# Flask route to get occupancy


@app.route('/occupancy', methods=['GET'])
def flask_get_occupancy():
    day = request.args.get('day', type=int)
    time = request.args.get('time')
    entries_count = request.args.get('entries', default=1, type=int)
    result, status_code = get_occupancy_data(day, time, entries_count)
    return jsonify(result), status_code


# Load the data
file_names = ['ml-model/data/Sign1_full_fitted.csv',
              'ml-model/data/Sign12_full_fitted.csv',
              'ml-model/data/Sign14_full_fitted.csv']
garage_dataframes = read_garage_data(file_names)

if __name__ == '__main__':
    app.run(debug=True)

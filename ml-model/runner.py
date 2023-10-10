from flask import Flask
app = Flask(__name__)


@app.route('/')
def print_work():
    print("Connecting...")
    return 'Flask Server is running!'


# @app.route('/contactUs', methods=['GET'])
# def contactUs():
#     newVariableWithSomeData = "u/Infinite-Bread-663"
#     return render_template('contactUs.html', title='Contact Us', dataForTheFrontEnd=newVariableWithSomeData)

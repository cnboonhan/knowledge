from chalice import Chalice
import boto3

app = Chalice(app_name='lambda-exec')


@app.route('/')
def index():
    return {'hello': 'world'}

@app.route('/upload', methods=['POST'])
def upload_to_s3():
    s3 = boto3.client('s3')
    response = s3.list_buckets()
    return {'response': [x['Name'] for x in s3.list_buckets()['Buckets']]}


# The view function above will return {"hello": "world"}
# whenever you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    return {'hello': name}
#
# @app.route('/users', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.current_request.json_body
#     # We'll echo the json body back to the user in a 'user' key.
#     return {'user': user_as_json}
#
# See the README documentation for more examples.
#

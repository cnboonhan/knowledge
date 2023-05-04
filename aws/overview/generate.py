from lib import generate_aws_phrases
import boto3
import json

for client in ['rds', 'apigatewayv2', 'ec2']:
    phrases = generate_aws_phrases(boto3.client(client, region_name='ap-southeast-1'))

    with open(f"{client}.json", "w") as outfile:
        json.dump({'client': client, 'data': phrases}, outfile, indent=4)
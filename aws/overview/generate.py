from lib import generate_aws_phrases, generate_aws_prompts
import boto3
import json

for client in ['rds', 'apigatewayv2', 'ec2']:
    phrases = generate_aws_phrases(boto3.client(client, region_name='ap-southeast-1'))
    prompts = generate_aws_prompts(phrases, client)

    with open(f"{client}.json", "w") as outfile:
        json.dump({'client': client, 'data': phrases, 'prompts': prompts}, outfile, indent=4)
        print(f"generated for client {client}")

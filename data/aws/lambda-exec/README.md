# lambda-exec

Example code to create a REST API for executing anything in AWS via `boto3`.

```
pip3 install chalice

# Generate Deploy and commit it to git
chalice package deploy

# Run this to package and deploy template, from an account with necessary rights
BUCKET_NAME_PREFIX=upload
CFN_STACK_NAME="LambdaS3UploaderStack"

BUCKET_NAME="$BUCKET_NAME_PREFIX-$(aws sts get-caller-identity --query Account --no-cli-pager --output text)"
aws s3api head-bucket --bucket $BUCKET_NAME || aws s3 mb s3://$BUCKET_NAME
aws cloudformation package --template-file deploy/sam.json --s3-bucket $BUCKET_NAME --output-template-file deploy/packaged.yaml
aws cloudformation deploy --template-file deploy/packaged.yaml --stack-name $CFN_STACK_NAME --capabilities CAPABILITY_IAM


# Cleanup
aws cloudformation delete-stack --stack-name $CFN_STACK_NAME
aws s3 rb s3://$BUCKET_NAME --force
```

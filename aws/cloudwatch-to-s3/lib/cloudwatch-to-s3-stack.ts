import * as cdk from "aws-cdk-lib";
import * as destinations from "aws-cdk-lib/aws-logs-destinations";
import { Construct } from "constructs";
import { aws_s3, aws_iam, aws_logs } from "aws-cdk-lib";

export class CloudwatchToS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const accountId = cdk.Stack.of(this).account;

    const uploadBucket = new aws_s3.Bucket(this, "cloudwatchLogsBucket", {
      bucketName: `cloudwatch-logs-${accountId}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const role = new aws_iam.Role(this, "cloudwatchUploadRole", {
      assumedBy: new aws_iam.ServicePrincipal("logs.amazonaws.com"),
    });
    uploadBucket.grantWrite(role);

    const logGroup = new aws_logs.LogGroup(this, "cloudwatchLogGroup", {
      logGroupName: "cloudwatchLogGroup",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      retention: aws_logs.RetentionDays.ONE_WEEK 
    });

  }
}

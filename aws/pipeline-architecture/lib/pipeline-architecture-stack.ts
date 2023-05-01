import * as cdk from "aws-cdk-lib";
import * as path from "path";
import { Construct } from "constructs";
import { aws_s3, aws_codecommit } from "aws-cdk-lib";

export class PipelineArchitectureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const accountId = cdk.Stack.of(this).account;

    new aws_s3.Bucket(this, "artifactsBucket", {
      bucketName: `artifacts-${accountId}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new aws_codecommit.Repository(this, "codeRepository", {
      repositoryName: "pipelineCodeRepository",
      description: "Example repository for code",
      code: aws_codecommit.Code.fromZipFile(path.join(__dirname, "code.zip")),
    });
  }
}

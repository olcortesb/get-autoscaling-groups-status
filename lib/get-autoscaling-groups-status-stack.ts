import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import {Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";


export class GetAutoscalingGroupsStatusStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaGetStatus = new Function(this,"LambdaGetStatus",{
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset("functions"),
      handler: "function.handler"
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'GetAutoscalingGroupsStatusQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

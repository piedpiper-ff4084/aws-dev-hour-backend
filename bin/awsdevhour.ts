#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsdevhourStack } from '../lib/awsdevhour-stack';
import { AwsdevhourBackendPipelineStack } from '../lib/awsdevhour-backend-pipeline-stack';

const app = new cdk.App();
new AwsdevhourStack(app, 'AwsdevhourStack', {
    env: {
        account: '897944787776',
        region: 'us-west-2'
    }
});
new AwsdevhourBackendPipelineStack(app, 'AwsdevhourBackendPipelineStack');

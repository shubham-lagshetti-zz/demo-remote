const aws = require('aws-sdk')
aws.config.update({ region: 'us-east-1' });
    const ssm = new aws.SSM();

    const params = {
        Name: 'o2-api-key',
        WithDecryption: true
    };
    const result = await ssm.getParameter(params).promise();
    console.log('params=',result.Parameter.Value);
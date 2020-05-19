const axios = require('axios')
let apiURL = 'https://sandbox.iexapis.com/stable/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        let company = event.queryStringParameters &&
        event.queryStringParameters['company']
            ? event.queryStringParameters['company']
            : 'aapl'
        let url = apiURL + 'stock/' + company + '/batch?types=quote,news,chart&range=1m&last=10&token=Tsk_39d4da6acf5c44dd8dcf8176200eb1ed'
        const ret = await axios(url);

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'success',
                data: ret.data
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

import { APIGatewayProxyHandler } from 'aws-lambda'

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        (process.env.SECRET_MESSAGE as string) ||
        'Hello Serverless framework v3',
      context,
      event,
    }),
  }
}

export const handler = hello

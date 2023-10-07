import { APIGatewayEvent, Context } from 'aws-lambda'
import * as handler from '../src/handlers/hello'

test('hello handler', async () => {
  const event = { body: 'Test Body' } as APIGatewayEvent
  const context = {} as Context

  const response = await handler.hello(event, context, null)

  if (response) {
    expect(response.statusCode).toEqual(200)
    expect(typeof response.body).toBe('string')
  }
})

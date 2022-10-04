import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

import router from './router'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true })

// Add our route handler
server.register(router)

// Start your server
server.listen(
  { port: Number(process.env.PORT) || 8080, host: '0.0.0.0' },
  (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  },
)

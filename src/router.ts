import { FastifyInstance } from 'fastify'
import helloController from './controllers/hello'

export default async function router(fastify: FastifyInstance) {
  fastify.register(helloController, { prefix: '/api' })
}

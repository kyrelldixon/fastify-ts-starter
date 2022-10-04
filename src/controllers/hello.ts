import { FastifyInstance, FastifyReply } from 'fastify'

interface HelloQueryString {
  name?: string
}

export default async function pingController(server: FastifyInstance) {
  server.get<{ Querystring: HelloQueryString }>(
    '/hello',
    (request, reply: FastifyReply) => {
      const { name } = request.query
      reply.code(200).send(`hello ${name ?? 'world'}`)
    },
  )
}

import fastify, { FastifyInstance } from 'fastify'
import autoload from 'fastify-autoload'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import path from 'path'

const PORT = 3000

const createServer = (): FastifyInstance => {
  const server = fastify({
    logger: true
  })

  void server.register(cors)
  void server.register(helmet, { enableCSPNonces: true })

  void server.register(autoload, {
    dir: path.join(__dirname, 'routes')
  })

  return server
}

createServer().listen(PORT).then((address) => {
  console.log(`Server is running at ${address}`)
}).catch((e) => {
  console.trace(e)
})

import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.get('/', async () => {
    return {
      author: 'KanapongAiamtip',
      description: 'Please contact kannaphongi62@nu.ac.th for contrubition.'
    }
  })
}

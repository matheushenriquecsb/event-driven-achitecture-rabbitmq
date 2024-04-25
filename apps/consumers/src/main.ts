import { NestFactory } from '@nestjs/core';
import { ConsumersModule } from './consumers.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumersModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://sthtxfam:NBBOOnZkwwBLp83KmPQH1M9Q9FhfOPEH@beaver.rmq.cloudamqp.com/sthtxfam',
        ],
        queue: 'orders_queue',
      },
    },
  );
  app.listen();
}
bootstrap();

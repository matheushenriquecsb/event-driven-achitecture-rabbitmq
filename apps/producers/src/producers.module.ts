import { Module } from '@nestjs/common';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://sthtxfam:NBBOOnZkwwBLp83KmPQH1M9Q9FhfOPEH@beaver.rmq.cloudamqp.com/sthtxfam',
          ],
          queue: 'orders_queue',
        },
      },
    ]),
  ],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}

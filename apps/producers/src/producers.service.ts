import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) {}
  placeOrder(order: OrderDto) {
    this.rabbitClient.emit('order-placed', order);

    return { message: 'Order placed successfully' };
  }

  getOrder() {
    return this.rabbitClient.send({ cmd: 'fetch-orders' }, {});
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class ConsumersService {
  orders: OrderDto[] = [];

  handleOrderPlaced(order: OrderDto) {
    console.log(`Received a new order - customer ${order.email}`);
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}

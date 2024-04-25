import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  @Post('place-order')
  placeOrder(@Body() order: OrderDto) {
    console.log(order);
    return this.producersService.placeOrder(order);
  }

  @Get()
  getOrder() {
    return this.producersService.getOrder();
  }
}

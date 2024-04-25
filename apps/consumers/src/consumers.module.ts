import { Module } from '@nestjs/common';
import { ConsumersController } from './consumers.controller';
import { ConsumersService } from './consumers.service';

@Module({
  imports: [],
  controllers: [ConsumersController],
  providers: [ConsumersService],
})
export class ConsumersModule {}

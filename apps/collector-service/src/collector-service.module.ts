import { Module } from '@nestjs/common';
import { CollectorServiceController } from './collector-service.controller';
import { CollectorServiceService } from './collector-service.service';

@Module({
  imports: [],
  controllers: [CollectorServiceController],
  providers: [CollectorServiceService],
})
export class CollectorServiceModule {}

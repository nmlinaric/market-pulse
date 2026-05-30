import { Controller, Get } from '@nestjs/common';
import { CollectorServiceService } from './collector-service.service';

@Controller()
export class CollectorServiceController {
  constructor(
    private readonly collectorServiceService: CollectorServiceService,
  ) {}

  @Get()
  getHello(): string {
    return this.collectorServiceService.getHello();
  }
}

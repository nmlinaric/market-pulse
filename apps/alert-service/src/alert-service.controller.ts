import { Controller, Get } from '@nestjs/common';
import { AlertServiceService } from './alert-service.service';

@Controller()
export class AlertServiceController {
  constructor(private readonly alertServiceService: AlertServiceService) {}

  @Get()
  getHello(): string {
    return this.alertServiceService.getHello();
  }
}

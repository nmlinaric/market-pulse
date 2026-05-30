import { Controller, Get } from '@nestjs/common';
import { AnalyticsEngineService } from './analytics-engine.service';

@Controller()
export class AnalyticsEngineController {
  constructor(
    private readonly analyticsEngineService: AnalyticsEngineService,
  ) {}

  @Get()
  getHello(): string {
    return this.analyticsEngineService.getHello();
  }
}

import { Module } from '@nestjs/common';
import { AnalyticsEngineController } from './analytics-engine.controller';
import { AnalyticsEngineService } from './analytics-engine.service';

@Module({
  imports: [],
  controllers: [AnalyticsEngineController],
  providers: [AnalyticsEngineService],
})
export class AnalyticsEngineModule {}

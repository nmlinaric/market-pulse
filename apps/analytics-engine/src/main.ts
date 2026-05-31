import { NestFactory } from '@nestjs/core';
import { AnalyticsEngineModule } from './analytics-engine.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsEngineModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  Logger.error(
    'Failed to start analytics-engine',
    err instanceof Error ? err.stack : String(err),
    'bootstrap',
  );
  process.exit(1);
});

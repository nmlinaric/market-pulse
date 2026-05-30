import { NestFactory } from '@nestjs/core';
import { AnalyticsEngineModule } from './analytics-engine.module';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsEngineModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

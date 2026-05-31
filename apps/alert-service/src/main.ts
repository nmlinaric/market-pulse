import { NestFactory } from '@nestjs/core';
import { AlertServiceModule } from './alert-service.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AlertServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  Logger.error(
    'Failed to start alert-service',
    err instanceof Error ? err.stack : String(err),
    'bootstrap',
  );
  process.exit(1);
});

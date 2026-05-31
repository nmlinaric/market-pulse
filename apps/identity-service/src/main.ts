import { NestFactory } from '@nestjs/core';
import { IdentityServiceModule } from './identity-service.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(IdentityServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  Logger.error(
    'Failed to start identity-service',
    err instanceof Error ? err.stack : String(err),
    'bootstrap',
  );
  process.exit(1);
});

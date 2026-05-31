import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  Logger.error(
    'Failed to start api-gateway',
    err instanceof Error ? err.stack : String(err),
    'bootstrap',
  );
  process.exit(1);
});

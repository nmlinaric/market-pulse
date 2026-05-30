import { NestFactory } from '@nestjs/core';
import { CollectorServiceModule } from './collector-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CollectorServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

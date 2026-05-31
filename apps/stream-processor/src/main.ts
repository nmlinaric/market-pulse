import { NestFactory } from '@nestjs/core';
import { StreamProcessorModule } from './stream-processor.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(StreamProcessorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  Logger.error(
    'Failed to start stream-processor',
    err instanceof Error ? err.stack : String(err),
    'bootstrap',
  );
  process.exit(1);
});

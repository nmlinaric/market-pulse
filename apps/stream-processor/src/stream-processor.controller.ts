import { Controller, Get } from '@nestjs/common';
import { StreamProcessorService } from './stream-processor.service';

@Controller()
export class StreamProcessorController {
  constructor(
    private readonly streamProcessorService: StreamProcessorService,
  ) {}

  @Get()
  getHello(): string {
    return this.streamProcessorService.getHello();
  }
}

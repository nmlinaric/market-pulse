import { Injectable } from '@nestjs/common';

@Injectable()
export class StreamProcessorService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectorServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

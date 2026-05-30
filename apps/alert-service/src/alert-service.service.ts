import { Injectable } from '@nestjs/common';

@Injectable()
export class AlertServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

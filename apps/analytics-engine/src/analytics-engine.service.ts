import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsEngineService {
  getHello(): string {
    return 'Hello World!';
  }
}

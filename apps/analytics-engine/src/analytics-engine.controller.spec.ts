import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsEngineController } from './analytics-engine.controller';
import { AnalyticsEngineService } from './analytics-engine.service';

describe('AnalyticsEngineController', () => {
  let analyticsEngineController: AnalyticsEngineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsEngineController],
      providers: [AnalyticsEngineService],
    }).compile();

    analyticsEngineController = app.get<AnalyticsEngineController>(
      AnalyticsEngineController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(analyticsEngineController.getHello()).toBe('Hello World!');
    });
  });
});

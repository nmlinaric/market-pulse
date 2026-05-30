import { Test, TestingModule } from '@nestjs/testing';
import { CollectorServiceController } from './collector-service.controller';
import { CollectorServiceService } from './collector-service.service';

describe('CollectorServiceController', () => {
  let collectorServiceController: CollectorServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CollectorServiceController],
      providers: [CollectorServiceService],
    }).compile();

    collectorServiceController = app.get<CollectorServiceController>(
      CollectorServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(collectorServiceController.getHello()).toBe('Hello World!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AlertServiceController } from './alert-service.controller';
import { AlertServiceService } from './alert-service.service';

describe('AlertServiceController', () => {
  let alertServiceController: AlertServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlertServiceController],
      providers: [AlertServiceService],
    }).compile();

    alertServiceController = app.get<AlertServiceController>(
      AlertServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(alertServiceController.getHello()).toBe('Hello World!');
    });
  });
});

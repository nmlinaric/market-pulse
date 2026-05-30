import { Test, TestingModule } from '@nestjs/testing';
import { StreamProcessorController } from './stream-processor.controller';
import { StreamProcessorService } from './stream-processor.service';

describe('StreamProcessorController', () => {
  let streamProcessorController: StreamProcessorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StreamProcessorController],
      providers: [StreamProcessorService],
    }).compile();

    streamProcessorController = app.get<StreamProcessorController>(
      StreamProcessorController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(streamProcessorController.getHello()).toBe('Hello World!');
    });
  });
});

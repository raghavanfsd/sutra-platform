import { Test, TestingModule } from '@nestjs/testing';
import { VartakaService } from './vartaka.service';

describe('VartakaService', () => {
  let service: VartakaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VartakaService],
    }).compile();

    service = module.get<VartakaService>(VartakaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

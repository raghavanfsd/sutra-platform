import { Test, TestingModule } from '@nestjs/testing';
import { SanghaService } from './sangha.service';

describe('SanghaService', () => {
  let service: SanghaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanghaService],
    }).compile();

    service = module.get<SanghaService>(SanghaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

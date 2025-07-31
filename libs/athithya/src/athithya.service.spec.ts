import { Test, TestingModule } from '@nestjs/testing';
import { AthithyaService } from './athithya.service';

describe('AthithyaService', () => {
  let service: AthithyaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthithyaService],
    }).compile();

    service = module.get<AthithyaService>(AthithyaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

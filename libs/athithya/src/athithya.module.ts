import { Module } from '@nestjs/common';
import { AthithyaService } from './athithya.service';

@Module({
  providers: [AthithyaService],
  exports: [AthithyaService],
})
export class AthithyaModule {}

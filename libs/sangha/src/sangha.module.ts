import { Module } from '@nestjs/common';
import { SanghaService } from './sangha.service';

@Module({
  providers: [SanghaService],
  exports: [SanghaService],
})
export class SanghaModule {}

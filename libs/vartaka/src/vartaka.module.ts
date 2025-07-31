import { Module } from '@nestjs/common';
import { VartakaService } from './vartaka.service';

@Module({
  providers: [VartakaService],
  exports: [VartakaService],
})
export class VartakaModule {}

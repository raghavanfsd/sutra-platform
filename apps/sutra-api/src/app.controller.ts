import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  healthCheck(): string {
    return 'ok';
  }

  @Get('echo')
  echo(@Query('msg') msg: string) {
    return { echo: msg ?? '' };
  }
}

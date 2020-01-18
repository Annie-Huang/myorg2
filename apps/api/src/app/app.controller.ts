import { Controller, Get } from '@nestjs/common';

// import { Message } from '@myorg2/api-interfaces';
// import {AppService, Todo} from './app.service';

import {AppService} from './app.service';
import {Todo} from '@myorg2/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  // getData(): Message {
  //   return this.appService.getData();
  // }

  @Get('todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }
}

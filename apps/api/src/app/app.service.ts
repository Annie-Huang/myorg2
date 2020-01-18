import { Injectable } from '@nestjs/common';
// import { Message } from '@myorg2/api-interfaces';
import {Todo} from '@myorg2/api-interfaces';

// export interface Todo {
//   title: string;
// }

@Injectable()
export class AppService {
  // getData(): Message {
  //   return { message: 'Welcome to api!' };
  // }

  getTodos(): Todo[] {
    return [{ title: 'Fix my computer!' }, { title: 'Fix my desk' }];
  }
}

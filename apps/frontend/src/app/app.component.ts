import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@myorg2/api-interfaces';
import {Observable} from 'rxjs';

interface Todo {
  title: string;
}

@Component({
  selector: 'myorg2-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Todos</h1>
    <ul>
      <li *ngFor="let t of todos | async">{{ t.title }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');

  todos: Observable<Todo[]>;

  constructor(private http: HttpClient) {
    this.todos = http.get<Todo[]>('/api/todos');
  }
}

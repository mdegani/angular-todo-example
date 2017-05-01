import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoService3 {
  public todoList = [];
  constructor(private http: ApiService) { }

  getProducts() {
    return this.http.get('todos')
      .map(item => item.map(todo => this.getTodoTaskForDisplay(todo.label, todo.done, todo.id)))
      .subscribe(todos => this.todoList = todos);
  }

  getTodoTaskForDisplay(label, isComplete, id) {
    return {
      id,
      label,
      isComplete
    };
  }
}

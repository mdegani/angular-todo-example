import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoService {
  public todoList = [];
  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('http://localhost:3000/todos')
      .map(response => response.json())
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

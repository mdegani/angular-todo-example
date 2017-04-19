import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  items: string[] = [];

  constructor() { }

  addItem(item: string) {
    this.items.push(item);
  }
}

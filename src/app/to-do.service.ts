import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {

  // changes: BehaviorSubject<string[]> = new BehaviorSubject([]);
  items: string[] = [];

  constructor() { }

  // getChanges() {
  //   return this.changes;
  // }

  addItem(item: string) {
    this.items.push(item);
    // this.changes.next(this.items);
  }
}

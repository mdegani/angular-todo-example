import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ToDoService3 } from './to-do-3.service';
import { ApiService } from './api-service.service';

fdescribe('ToDoService3', () => {
  let service: ToDoService3;
  beforeEach(() => {
    const fakeApiService = {
      get: path => Observable.of([
        {
          id: 1,
          label: 'first',
          done: false
        }, {
          id: 2,
          label: 'second',
          done: true
        }
      ])
    };
    service = new ToDoService3(fakeApiService as ApiService);
  });

  it('should format the retrieved data', () => {
    service.getProducts();
    expect(service.todoList).toEqual([
      {
        id: 1,
        label: 'first',
        isComplete: false
      }, {
        id: 2,
        label: 'second',
        isComplete: true
      }
    ]);
  });
});


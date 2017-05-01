import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ToDoService2 } from './to-do-2.service';

describe('ToDoService2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ToDoService2,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
    const http = TestBed.get(Http);
    spyOn(http, 'get').and.callFake(() => Observable.of({
      json: () => [
        {
          id: 1,
          label: 'first',
          done: false
        }, {
          id: 2,
          label: 'second',
          done: true
        }
      ]
    }));
  });

  it('should format the retrieved data', inject([ToDoService2], (service: ToDoService2) => {
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
  }));
});


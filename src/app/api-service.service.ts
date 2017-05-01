import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpWrapper {
  constructor(private http: Http) { }

  get(path) {
    return this.http.get(`http://localhost:3000/${path}`)
      .map(response => response.json());
  }
}

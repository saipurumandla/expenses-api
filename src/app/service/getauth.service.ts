import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetauthService {
  readonly path = '/auth';
  constructor(
    public http: Http
  ) { }
  getStatus() {
    return this.http.get('status').pipe(map(res => res.json()));
  }
}

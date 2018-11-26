import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { appConfig } from '../app.config';
import { GenricHelper as GenricHelper } from './GenericHelper';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GetauthService } from '../service/getauth.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttp extends Http {

  genericHelper: GenricHelper = new GenricHelper();
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public getuser: GetauthService) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(appConfig.apiUrl + url, this.addJwt(options)).pipe(catchError(this.handleError));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(appConfig.apiUrl + url, body, this.addJwt(options)).pipe(catchError(this.handleError));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(appConfig.apiUrl + url, body, this.addJwt(options)).pipe(catchError(this.handleError));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(appConfig.apiUrl + url, this.addJwt(options)).pipe(catchError(this.handleError));
  }

  // private helper methods

  private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
    // ensure request options and headers are not null
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();

    // add authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser);
    if (currentUser && currentUser.token) {
      options.headers.append('Authorization', currentUser.token);
    }

    return options;
  }

  private handleError(error: any) {
    if (error.status === 401) {
      // 401 unauthorized response so log user out of client
      localStorage.removeItem('currentUser');
      window.location.href = 'login';
    } else if (error.status === 404) {
      window.location.href = '404';
    } else if (error.status >= 500) {
      this.genericHelper.displayNetworkError();
      this.getuser.getStatus().subscribe(res => {
        this.genericHelper.hideNetworkError();
      });
    }
    return throwError(error);
  }
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, getuser: GetauthService): Http {

  return new CustomHttp(xhrBackend, requestOptions, getuser);
}

export let customHttpProvider = {
  provide: Http,
  useFactory: customHttpFactory,
  deps: [XHRBackend, RequestOptions]
};

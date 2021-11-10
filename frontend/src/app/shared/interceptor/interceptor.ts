import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  public token: string;
  constructor() {
    this.token = sessionStorage.getItem('token');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      const headers = new HttpHeaders().append('x-acess-token', this.token);

      request = request.clone({headers});
    }
    return next.handle(request);
  }
}

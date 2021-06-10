import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TokenAuthService } from './token-auth.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization'; 

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private token: TokenAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
];
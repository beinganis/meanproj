import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { MainService } from './main.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: MainService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.auth.isLogin())
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });

        return next.handle(request);
    }
}
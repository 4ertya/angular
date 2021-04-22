import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {baseUrl} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data): Observable<any> {
    console.log('auth service');
    return this.http.post(`${baseUrl}auth/login`, data).pipe(catchError(this.handleError));
  }

  handleError(err): any {
    return throwError(err);
  }
}

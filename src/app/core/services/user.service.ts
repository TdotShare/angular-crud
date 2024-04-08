import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GetUserAll } from '../parameters/user/getUserAll';
import { CreateUserOutput } from '../parameters/user/createUserOutput';
import { ResponseMessageOutput } from '../parameters/user/responseMessageOutput';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl = 'https://localhost:7023/User';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }


  getUserAll(): Observable<GetUserAll[]> {
    return this.http.get<GetUserAll[]>(`${this.apiUrl}/getUserAll`).pipe(retry(1), catchError(this.handleError));
  }

  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetUser/${id}`).pipe(retry(1), catchError(this.handleError));
  }

  createUser(data: any): Observable<CreateUserOutput> {
    return this.http.post<any>(`${this.apiUrl}/CreateUser`, JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  updateUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/UpdateUser`, JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  deleteUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/DeleteUser/${id}`).pipe(retry(1), catchError(this.handleError));
  }

  deleteUploadAttachedUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/DeleteUploadAttachedUser/${id}`).pipe(retry(1), catchError(this.handleError));
  }

  getSearchUser(data: any): Observable<any> {
    return this.http.post<GetUserAll[]>(`${this.apiUrl}/GetSearchUser`, JSON.stringify(data), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  uploadAttachedUser(data: any): Observable<ResponseMessageOutput> {
    return this.http.post<ResponseMessageOutput>(`${this.apiUrl}/UploadAttachedUser`, data).pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }




}

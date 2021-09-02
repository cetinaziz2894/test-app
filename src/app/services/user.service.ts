import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'https://dummyapi.io/data/v1/user';

  constructor(private http: HttpClient) { }

  getUsers(item:number) : Observable<any>{
    return this.http.get<any>(`${this.userUrl}?limit=${item}`, {headers:{"Content-Type": "application/json",'app-id':'611f33c594916dee4af13a68'}})
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<any>('users', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
  }
}

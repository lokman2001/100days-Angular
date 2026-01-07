import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public baseURL = 'https://dummyjson.com/users';
  constructor(public Http: HttpClient) {}
  public getUserById(id: number): Observable<User> {
    return this.Http.get(`${this.baseURL}/${id}`).pipe(
      map((value) => new User(value))
    );
  }
}

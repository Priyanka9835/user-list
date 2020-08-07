import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getUserDetails() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  // tslint:disable-next-line:typedef
  getUserById(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}

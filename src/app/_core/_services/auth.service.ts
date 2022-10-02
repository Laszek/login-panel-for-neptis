import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../_models/login-data.model';
import { RegisterData } from '../_models/register-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {
  }

  register(data: RegisterData) {
    this._httpClient.post("https://jsonplaceholder.typicode.com/posts", data)
      .subscribe(responseData => {
        if (responseData)
          window.alert("Pomyślnie wysłano zapytanie!")
        else
          window.alert("Wystąpił błąd przy wysyłaniu zapytania!")
      })
  }

  login(data: LoginData) {
    this._httpClient.post("https://jsonplaceholder.typicode.com/posts/posts", data)
      .subscribe(responseData => {
        window.alert("Pomyślnie wysłano zapytanie!")
      }, (error) => {
        window.alert("Wystąpił błąd przy wysyłaniu zapytania!")
      })
  }
}

import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAuth } from '../auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: IAuth = {
    username: '',
    password: '',
  }

   user: any

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) { }

  async login(usuario: IAuth) {
    const {username, password } = usuario

    const result = await this.http.post<any>(`${environment.api}/auth/login`, null,
    { params: { username, password} }
    ).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      this.user = username
      return true;
    }

    return false;
  }

  isTokenExpired(token: string){
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  logout(){
    localStorage.removeItem('token');
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}


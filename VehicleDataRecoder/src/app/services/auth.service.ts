import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { Tokens } from '../model/tokens';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER_NAME = 'USER_NAME';
  private readonly USER_NIC = 'USER_NIC';

  private loggedUser!: string;

  constructor(private http: HttpClient) {}
  

  login(user: { userName: string, userPassword: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/user/authenticate`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.userName, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}/user/authenticate`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() : boolean{
    if(this.getJwtToken()){
      return true; 
    }
    return false;
  }

  testToken(){
    return this.http.get<any>(`${environment.apiUrl}/user/`, {
      reportProgress: true,  
      observe: 'events' 
    });
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.refreshToken);
    }));
  }

  getJwtToken() :any{
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  public doLogoutUser() {
    // this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwtToken);
    localStorage.setItem(this.USER_NAME, tokens.userName);
    localStorage.setItem(this.USER_NIC, tokens.userNIC);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.USER_NAME);
    localStorage.removeItem(this.USER_NIC);
  }
}

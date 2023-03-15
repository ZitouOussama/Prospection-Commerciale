import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl='http://127.0.0.1:8000/api';

  constructor( private http: HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseUrl}/register`,data)
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`,data)
  }

  sendResetPasswordLink(data){
    return this.http.post(`${this.baseUrl}/resetPassword`,data)
  }


  changePassword(data){
    return this.http.post(`${this.baseUrl}/changePassword`,data)
  }

}

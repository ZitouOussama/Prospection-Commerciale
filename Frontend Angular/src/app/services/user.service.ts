import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getRole(){
    return this.http.get(`${this.baseUrl}/role`);
  }

  addUser(data){
    return this.http.post(`${this.baseUrl}/uploadImage`,data);
  }

  showUser(){
    return this.http.get(`${this.baseUrl}/user`);
  }

  getUser(id){
    return this.http.put(`${this.baseUrl}/user/${id}`,null);
  }

  updateUser(data){
    return this.http.post(`${this.baseUrl}/upuser`,data);
  }

  deleteUser(data){
    return this.http.post(`${this.baseUrl}/deleteuser`,data);
  }
}

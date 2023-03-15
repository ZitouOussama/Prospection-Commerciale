import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl='http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  showUser(){
    return this.http.get(`${this.baseUrl}/usercount`);
  }

  showClient(){
    return this.http.get(`${this.baseUrl}/clientcount`);
  }
}

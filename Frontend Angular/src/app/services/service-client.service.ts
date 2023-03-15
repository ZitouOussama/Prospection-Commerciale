import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  private baseUrl='http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  addClient(data){
    return this.http.post(`${this.baseUrl}/client`,data);
  }

  showClient(){
    return this.http.get(`${this.baseUrl}/client`);
  }

  deleteClient(data){
    return this.http.post(`${this.baseUrl}/delclient`,data);
  }

  getClient(id){
    return this.http.put(`${this.baseUrl}/client/${id}`,null);
  }

  updateClient(data){
    return this.http.post(`${this.baseUrl}/upclient`,data);
  }
}

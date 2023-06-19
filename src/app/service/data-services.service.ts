import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http: HttpClient) { }

  getData(){
    
    return this.http.get('https://jsonplaceholder.typicode.com/users', { observe: 'response' })
  }

  getData2(){
    return this.http.get('https://jsonplaceholder.typicode.com/users', { observe: 'response' })
  }

}

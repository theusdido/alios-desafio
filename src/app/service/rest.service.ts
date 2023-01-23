import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    public http:HttpClient
  ) { }

  get(url:string,options:any = {}){
    return this.http.get(url,options)
  }
}

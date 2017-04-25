import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {AppConfig} from "../../app.config";
import {User} from "./user.interface";

@Injectable()
export class AuthService {


  constructor(private _http: Http, private _config: AppConfig) { }

  login(email: string, password: string){
    return this._http.post(this._config.apiUrl+'/users/authenticate',{email:email, password:password})
      .map((response: Response)=>{
        let user = response.json();
        if(user && user.token){
          localStorage.setItem('currentUser',JSON.stringify(user));
        }
      });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
      let headers = new Headers({ 'Authorization': 'Bearer '+ currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }

  getCurrentUser(){

  }


}

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AppConfig} from "../../app.config";
import {AuthService} from "./auth.service";
import {Movie} from "../../movies/shared/movie.model";
import {MovieService} from "../../movies/shared/movie.service";
import {User} from "./user.interface";

@Injectable()
export class UserService {

  constructor( private _http: Http, private _config: AppConfig, private _authService: AuthService) { }

  getAll(){
    return this._http.get(this._config.apiUrl+'/users',this._authService.jwt())
      .map((response: Response)=> response.json());
  }

  getById(id: string){
    return this._http.get(this._config.apiUrl+'/users/'+id,this._authService.jwt())
      .map((response: Response) => response.json());
  }

  add(user: User){
    return this._http.post(this._config.apiUrl+'/users/', user, this._authService.jwt());

  }

  update(user: User){
    return this._http.post(this._config.apiUrl+'/users/'+user.id, user, this._authService.jwt());

  }

  delete(id: string){
    return this._http.delete(this._config.apiUrl+'/users/'+id,this._authService.jwt());
  }


}

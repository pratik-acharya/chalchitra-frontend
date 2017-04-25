import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams, Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {AppConfig} from "../../app.config";
import {Movie} from "./movie.model";


@Injectable()
export class MovieService {

  private movieUrl = 'https://api.themoviedb.org/3/movie/';


  _params: URLSearchParams;


  constructor(private _jsonp: Jsonp, private _config: AppConfig, private _http: Http) {
    this._params = new URLSearchParams();
    this._params = new URLSearchParams();
    this._params.set('api_key','e57ad36cb716af1535e9b14b9d59a568');
    this._params.set('format','json');
    this._params.set('callback','JSONP_CALLBACK');
  }

  add(movie:Movie){
    console.log(movie);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._config.movieUrl, movie,options);


  }


  findMovies(){
    return this._jsonp.get(this.movieUrl+'popular',{search: this._params})
        .map(response => response.json().results);
  }

  findMovieById(id){
    return this._jsonp.get(this.movieUrl+id,{search: this._params})
      .map(response => response.json());
  }

  findCastByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/credits',{search: this._params})
      .map(response => response.json());

  }

  findReviewByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/reviews',{search:this._params})
      .map(response =>response.json());

  }

  findImagesByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/images',{search: this._params})
      .map(response =>response.json());
  }

  findVideosByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/videos',{search: this._params})
      .map(response => response.json());
  }

  findSimilarMoviesByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/similar',{search: this._params})
      .map(response => response.json());
  }

  findRecommendedMoviesByMovieId(id){
    return this._jsonp.get(this.movieUrl+id+'/recommendations',{search: this._params})
      .map(response => response.json());
  }



}

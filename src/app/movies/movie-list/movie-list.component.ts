import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import {MovieService} from "../shared/movie.service";
import {InputDecorator} from "@angular/core/src/metadata/directives";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchForm: FormGroup;
  movies: Observable<any>;
  posterUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  constructor(private _fb: FormBuilder,private _movieService: MovieService) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      search: ['',[Validators.required]],
    });
    this.movies = this._movieService.findMovies();
  }



}

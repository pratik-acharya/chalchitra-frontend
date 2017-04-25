"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MovieListComponent = (function () {
    function MovieListComponent(_movieService) {
        this._movieService = _movieService;
        this.posterUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.movies = this._movieService.findMovies();
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['./movie-list.component.css']
        })
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;

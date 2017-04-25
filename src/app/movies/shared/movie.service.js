"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var MovieService = (function () {
    function MovieService(_jsonp) {
        this._jsonp = _jsonp;
        this.movieUrl = 'https://api.themoviedb.org/3/movie/';
        this._params = new http_1.URLSearchParams();
        this._params = new http_1.URLSearchParams();
        this._params.set('api_key', 'e57ad36cb716af1535e9b14b9d59a568');
        this._params.set('format', 'json');
        this._params.set('callback', 'JSONP_CALLBACK');
    }
    MovieService.prototype.findMovies = function () {
        return this._jsonp.get(this.movieUrl + 'popular', { search: this._params })
            .map(function (response) { return response.json().results; });
    };
    MovieService.prototype.findMovieById = function (id) {
        return this._jsonp.get(this.movieUrl + id, { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findCastByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/credits', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findReviewByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/reviews', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findImagesByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/images', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findVideosByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/videos', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findSimilarMoviesByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/similar', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.findRecommendedMoviesByMovieId = function (id) {
        return this._jsonp.get(this.movieUrl + id + '/recommendations', { search: this._params })
            .map(function (response) { return response.json(); });
    };
    MovieService = __decorate([
        core_1.Injectable()
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MovieDetailComponent = (function () {
    function MovieDetailComponent(_movieService, _route, _sanitizer) {
        this._movieService = _movieService;
        this._route = _route;
        this._sanitizer = _sanitizer;
        this.posterUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this._movieService.findMovieById(id).subscribe(function (movie) {
                _this.movie = movie;
            });
            _this._movieService.findCastByMovieId(id).subscribe(function (credits) {
                _this.castList = credits.cast;
                _this.crewList = credits.crew;
            });
            _this._movieService.findReviewByMovieId(id).subscribe(function (reviews) {
                _this.reviewList = reviews.results;
            });
            _this._movieService.findImagesByMovieId(id).subscribe(function (images) {
                _this.imageList = images.posters;
            });
            _this._movieService.findVideosByMovieId(id).subscribe(function (videos) {
                _this.videoList = videos.results;
                for (var k in _this.videoList) {
                    if (typeof _this.videoList[k] !== 'function') {
                        _this.videoList[k].key = _this.sanitizeVideoUrl(_this.videoList[k].key);
                    }
                }
            });
            _this._movieService.findSimilarMoviesByMovieId(id).subscribe(function (movies) {
                _this.similarList = movies.results;
            });
            _this._movieService.findRecommendedMoviesByMovieId(id).subscribe(function (movies) {
                _this.recommendedList = movies.results;
            });
        });
    };
    MovieDetailComponent.prototype.sanitizeVideoUrl = function (key) {
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
    };
    MovieDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-detail',
            templateUrl: './movie-detail.component.html',
            styleUrls: ['./movie-detail.component.css']
        })
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;

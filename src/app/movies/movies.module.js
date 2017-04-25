"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_detail_component_1 = require('./movie-detail/movie-detail.component');
var movie_service_1 = require("./shared/movie.service");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng_bootstrap_1.NgbModule,
            ],
            declarations: [movie_list_component_1.MovieListComponent, movie_detail_component_1.MovieDetailComponent],
            providers: [movie_service_1.MovieService]
        })
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;

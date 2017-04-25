"use strict";
var movie_list_component_1 = require("./movie-list/movie-list.component");
var movie_detail_component_1 = require("./movie-detail/movie-detail.component");
/**
 * Created by Pratik on 3/1/17.
 */
exports.movieRoutes = [
    {
        path: 'movies',
        component: movie_list_component_1.MovieListComponent
    },
    {
        path: 'movies/:id',
        component: movie_detail_component_1.MovieDetailComponent
    }
];

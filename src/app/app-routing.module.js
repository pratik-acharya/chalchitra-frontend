"use strict";
var router_1 = require("@angular/router");
var movies_routing_module_1 = require("./movies/movies-routing.module");
var users_routing_module_1 = require("./users/users-routing.module");
/**
 * Created by Pratik on 3/1/17.
 */
exports.routes = [
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    }
].concat(movies_routing_module_1.movieRoutes, users_routing_module_1.userRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);

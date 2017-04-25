import {Routes, RouterModule} from "@angular/router";
import {movieRoutes} from "./movies/movies-routing.module";
import {ModuleWithProviders} from "@angular/core";
import {userRoutes} from "./users/users-routing.module";
/**
 * Created by Pratik on 3/1/17.
 */

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  ...movieRoutes,
  ...userRoutes
];

export const  routing: ModuleWithProviders = RouterModule.forRoot(routes);

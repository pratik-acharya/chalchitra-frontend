import {Routes} from "@angular/router";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MovieFormComponent} from "./movie-form/movie-form.component";
/**
 * Created by Pratik on 3/1/17.
 */

export const movieRoutes: Routes =[
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/add',
    component: MovieFormComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  }
]

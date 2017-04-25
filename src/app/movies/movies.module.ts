import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieService} from "./shared/movie.service";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MovieFormComponent } from './movie-form/movie-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {FileSelectDirective} from "ng2-file-upload";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    MultiselectDropdownModule
  ],
  declarations: [MovieListComponent, MovieDetailComponent, MovieFormComponent,FileSelectDirective
  ],
  providers: [MovieService]
})
export class MoviesModule { }

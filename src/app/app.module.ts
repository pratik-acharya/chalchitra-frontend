import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {MoviesModule} from "./movies/movies.module";
import {routing} from "./app-routing.module";
import {UsersModule} from "./users/users.module";
import {AuthService} from "./users/shared/auth.service";
import {SharedModule} from "./shared/shared.module";
import {AppConfig} from "./app.config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    MoviesModule,
    UsersModule,
    SharedModule,
    routing
  ],
  providers: [
    AppConfig,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MyHomeComponentComponent } from "./MyHomeComponent/MyHomeComponent.component";
import { MyMovieComponentComponent } from "./MyMovieComponent/MyMovieComponent.component";
import { MoviesRouterRoutes } from "./movies-router.routing";

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, MoviesRouterRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

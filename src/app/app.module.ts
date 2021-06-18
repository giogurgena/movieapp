import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MaterializeButtonModule,
  MaterializeCardModule,
} from 'materialize-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TrendingComponent } from './trending/trending.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TabsComponent,
    TrendingComponent,
    MovieComponent,
    MovieDetailsComponent,
    PopularComponent,
    SearchComponent,
    CastComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    FormsModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

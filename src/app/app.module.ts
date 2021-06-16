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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TabsComponent,
    TrendingComponent,
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

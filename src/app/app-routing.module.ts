import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  // { path: 'trending', component: TrendingComponent },
  // { path: 'popular', component: PopularComponent },
  // { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

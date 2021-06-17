import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() movie;

  title: string;

  constructor() {}

  ngOnInit(): void {}

  Search() {
    this.movie = this.movie.filter((res) => {
      return res.title
        .toLocaleLowerCase()
        .match(this.title.toLocaleLowerCase());
    });
  }
}

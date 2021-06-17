import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  @Input() movie;

  constructor() {}

  ngOnInit(): void {}
}
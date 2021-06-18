import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit {
  @Input() actor;

  apiPosterUrl: string = environment.apiPosterUrl;

  constructor() {}

  ngOnInit(): void {}
}

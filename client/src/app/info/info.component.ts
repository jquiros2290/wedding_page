import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', '../../assets/stylesheets/bootstrap.min.css']
})
export class InfoComponent implements OnInit {
  lat1: number = 40.7098898;
  lng1: number = -74.01389890000002;
  lat2: number = 40.708882;
  lng2: number = -74.01143259999998;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }

}

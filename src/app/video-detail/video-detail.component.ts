import { Component, OnInit } from '@angular/core';
// import {form}


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})
export class VideoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

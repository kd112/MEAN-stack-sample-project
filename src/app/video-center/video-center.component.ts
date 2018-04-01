import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
	videos : Video[] =[
	{"_id":"id1","title":"title1","url":"url1","description":"Description 1"},
	{"_id":"id2","title":"title2","url":"url2","description":"Description 2"},
	{"_id":"id3","title":"title3","url":"url3","description":"Description 3"},
	{"_id":"id4","title":"title4","url":"url4","description":"Description 4"},
	{"_id":"id5","title":"title5","url":"url5","description":"Description 5"}
	];

  selectedVideo = Video;
  constructor() { }

  ngOnInit() {
  }
  onSelectVideo(video:any){
		this.selectedVideo =video;
		console.log(this.selectedVideo)
	}
}

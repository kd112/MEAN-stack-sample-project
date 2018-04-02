import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from './../video.service'
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {
	videos : Array<Video>;

  selectedVideo = Video;
  constructor(private _videoService:VideoService) { }
  // private _videoService = new VideoService()
  ngOnInit() {
    console.log("init")
  	this._videoService.getVideos().subscribe(resVideoData => {
      this.videos = resVideoData
      let video;
      video = this.videos[0]
      this.selectedVideo  = video ;
      
      });
    // if(!this.selectedVideo){console.log("Here")}
  }
  onSelectVideo(video:any){
		this.selectedVideo =video;
		console.log(this.selectedVideo)
	}
}

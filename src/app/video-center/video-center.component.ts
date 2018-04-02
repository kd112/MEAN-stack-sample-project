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
  private hideNewVideo:boolean=true;

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
    this.hideNewVideo = true; 
		console.log(this.selectedVideo)
	}
  onSubmitAddVideo(video:Video){
    this._videoService.postVideo(video).subscribe(resNewVideo =>{
      this.videos.push(resNewVideo);
      this.selectedVideo = resNewVideo;
      this.hideNewVideo = true;
    })
  }

  newVideo(){
    this.hideNewVideo =!this.hideNewVideo
  }

  onUpdateVideoEvent(video:any){
    this._videoService.putVideo(video).subscribe(resUpdatedVideo =>video = resUpdatedVideo)
    this.selectedVideo=null;
  }

  ondeleteVideoEvent(video:any){
    let video_array = this.videos;
    this._videoService.deleteVideo(video).subscribe(resDeleteVideo =>{
      for (let i = 0;i<video_array.length;i++){
        if (video_array[i]._id === resDeleteVideo._id){
            video_array.splice(i,1)
        }
      }
      this.videos = video_array;
      let video;
      video = this.videos[0]
      this.selectedVideo  = video
    })
  }

}

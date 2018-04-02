import { Component, OnInit,EventEmitter } from '@angular/core';
// import {DomSanitizer,SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video'],
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {

  private editTitle:boolean=false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter()
  private video :any;
  // video:any;
  // static get parameters(){
  //   return[DomSanitizationService]
  // }
  constructor() {}
  // this.sanitizer = sanitizer; }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.editTitle = false;
  }
  onTitleClick(){
  	console.log("title click")
  	this.editTitle=true;
  }

  updateVideo(){ 
    console.log(this.video)
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    console.log("delete event")
    this.deleteVideoEvent.emit(this.video)
  }
  // sanitizeUrl(url:any){
  //   console.log(url)
  //   let safeurl = this._sanitizationService.bypassSecurityTrustResourceUrl(url)
  //   console.log(safeurl)
  //   return safeurl
  // }
}

import { Component, OnInit } from '@angular/core';
// import {DomSanitizer,SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})
export class VideoDetailComponent implements OnInit {

  private editTitle:boolean=false;
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
  // sanitizeUrl(url:any){
  //   console.log(url)
  //   let safeurl = this._sanitizationService.bypassSecurityTrustResourceUrl(url)
  //   console.log(safeurl)
  //   return safeurl
  // }
}

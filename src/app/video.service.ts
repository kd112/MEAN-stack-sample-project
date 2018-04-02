import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import { Video } from './video'

@Injectable()
export class VideoService {
	private _getUrl = '/api/videos';
	private _postUrl = '/api/videos';
  private _putUrl = 'api/videos/'
  private _deleteUrl = 'api/videos/'
	// console.log(_this._getUrl);
  constructor(private _http:Http) { }
  
  getVideos(){
  	console.log("here")
  	return this._http.get(this._getUrl).map((response:Response) => response.json());	
  }
  postVideo(video:Video){
  	let headers = new Headers({'Content-Type':'application/json'})
  	let option = new RequestOptions({headers:headers})
  	return this._http.post(this._postUrl,JSON.stringify(video),option).map((response:Response)=>response.json())
  }

  putVideo(video:Video){
    console.log(video)
    let headers = new Headers({'Content-Type':'application/json'})
    let option = new RequestOptions({headers:headers})
    return this._http.put(`${this._putUrl}${video._id}`,JSON.stringify(video),option).map((response:Response)=>response.json())
  }

    deleteVideo(video:Video){
    console.log(video)
    // let headers = new Headers({'Content-Type':'application/json'})
    // let option = new RequestOptions({headers:headers})
    return this._http.delete(`${this._deleteUrl}${video._id}`).map((response:Response)=>response.json())
  }
  

}

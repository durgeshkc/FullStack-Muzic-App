import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { SavetrackComponent } from './savetrack/savetrack.component';
import {  UpdateTrackComponent } from './update-track/update-track.component';


@Injectable({
  providedIn: 'root'
})
export class MizixHttpService {
 
  public alltracks;
  public baseUrl = 'http://ws.audioscrobbler.com/2.0';
  public authToken='97858cce8345036a3be4bee69eeca2d6';


  public baseurlMongo='http://localhost:8090/api/v2/';

  constructor(private _http:HttpClient) {
    console.log("http srvice got called")
  }

  public searchtrack(trackname): any {
    this.alltracks=this._http.get(this.baseUrl+'/?method=track.search&track='+trackname+'&api_key='+this.authToken+'&format=json')
    console.log(this.alltracks);
    return this.alltracks;
  } 
  
  public findtrack(mid):any {
    let trackinfo=this._http.get(this.baseUrl+'/?method=track.getInfo&api_key='+this.authToken+'&mbid='
    +mid+'&format=json');
    return trackinfo;
  }

  public savetrack(trackinfo):any{
    let saveTrack=this._http.post(this.baseurlMongo+'track',trackinfo);
    console.log(trackinfo);
    return saveTrack; 
  }

  public getAllTracks() : any{ 
    const playlist = this._http.get(this.baseurlMongo + 'tracks');
    return playlist;
  }

  public deleteTrack(mid):any{
    const deletedTrack = this._http.delete(this.baseurlMongo + 'delete/' + mid);
    return deletedTrack;
  }

  public updateTrack(comment,mid):any{
    const updateTrack = this._http.put(this.baseurlMongo + 'update/'+ mid, comment);
    return updateTrack;
  }
}






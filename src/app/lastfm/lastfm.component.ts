import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';


@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.css']
})
export class LastfmComponent implements OnInit {

  // public imageurl : string;
  public alltracks;
  constructor(public _route: ActivatedRoute,private router: Router,public muzixservice:MizixHttpService) { }

 
  ngOnInit() {
    let trackname = this._route.snapshot.paramMap.get('trackname');
    console.log(trackname);
    
    this.alltracks=this.muzixservice.searchtrack(trackname).subscribe(
      
      data => {
        
        //trackmatches.track.image[1]['#text']
        this.alltracks = data;
       // console.log(this.alltracks.results.trackmatches.track[0].image[2]['#text']);
        // this.imageurl = this.alltracks.results.trackmatches.track[0].image[2]['#text'];
        //console.log("i am here"+this.imageurl);
       
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    ); 
  }
}

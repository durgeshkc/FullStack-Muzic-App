import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';


@Component({
  selector: 'app-savetrack',
  templateUrl: './savetrack.component.html',
  styleUrls: ['./savetrack.component.css']
})
export class SavetrackComponent implements OnInit {

  public artist:string;
  public mbid1:string;
  public track:string;
  public image:string;

  public trackinfo = {

    id : this.mbid1,
    name: this.track,
    comment : this.artist,
    imageurl:this.image,

  }
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MizixHttpService) {
    
    
   }
   
  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    console.log(this.mbid1)
    this.muzixservice.findtrack(this.mbid1).subscribe(  

      
      
      data => {
        console.log("dhtdutdutdut= "+data);
        //this.trackinfo=data;
      
        this.trackinfo.name = data.track.name;
        this.trackinfo.comment = data.track.artist.name;
        this.trackinfo.id=this.mbid1;
        this.trackinfo.imageurl = data.track.album.image[3]['#text'];
       let m= this.muzixservice.savetrack(this.trackinfo).subscribe(

        data=>{

          console.log(data);
        }
       );
       console.log(m);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
         

    );


   
  }

}
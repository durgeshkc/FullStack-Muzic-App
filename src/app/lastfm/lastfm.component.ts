import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';


@Component({
  selector: 'app-lastfm',
  templateUrl: './lastfm.component.html',
  styleUrls: ['./lastfm.component.css']
})
export class LastfmComponent implements OnInit {

  public alltracks;
  constructor(public _route: ActivatedRoute,private router: Router,public muzixservice:MizixHttpService) { }

 
  ngOnInit() {
    let trackname = this._route.snapshot.paramMap.get('trackname');
    console.log(trackname);
    
    this.alltracks=this.muzixservice.searchtrack(trackname).subscribe(
      
      data => {
       
        this.alltracks = data;
       
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    );
   

   
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {

  public mbid;
  public comment:string;
  constructor(private _route: ActivatedRoute,private router: Router,public muzixservice: MizixHttpService) { }

  // search():any{
  //   comment:this.comment;
  //   console.log("new comment = "+this.comment);
  // }
  ngOnInit() {
    this.mbid = this._route.snapshot.paramMap.get('mbid');

    this.comment = this._route.snapshot.paramMap.get('comment');

    this.muzixservice.updateTrack(this.comment,this.mbid).subscribe(

      data=>{

        console.log("here is the below data details" + data);
        // this.comment = data.comment;
        this.router.navigate(['/getwishlist']);
        data.track.comment = this.comment;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }
}

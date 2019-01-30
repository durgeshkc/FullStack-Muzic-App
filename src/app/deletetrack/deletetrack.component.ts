import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';

@Component({
  selector: 'app-deletetrack',
  templateUrl: './deletetrack.component.html',
  styleUrls: ['./deletetrack.component.css']
})
export class DeletetrackComponent implements OnInit {

  public mbid1;
  constructor(private _route: ActivatedRoute,private router: Router,public muzixservice: MizixHttpService) { }

  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');


    this.muzixservice.deleteTrack(this.mbid1).subscribe(
      data=> {
        this.router.navigate(['/getwishlist']);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
      
    ); 
  }

}

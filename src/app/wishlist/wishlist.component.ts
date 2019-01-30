import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { MizixHttpService } from '../mizix-http.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public tracks;
  constructor(private _route: ActivatedRoute,private router: Router,public muzixservice: MizixHttpService) { }

  ngOnInit() {
    this.muzixservice.getAllTracks().subscribe(  

        data=>{
          this.tracks = data;
          console.log(data);
        },
        error =>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }
    );
  }

}

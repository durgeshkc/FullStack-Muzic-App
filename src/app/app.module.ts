import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { SavetrackComponent } from './savetrack/savetrack.component';
import { DeletetrackComponent } from './deletetrack/deletetrack.component';
import { MizixHttpService } from './mizix-http.service';
import { HttpClientModule } from "@angular/common/http";
import { SearchtrackComponent } from './searchtrack/searchtrack.component';

import { LastfmComponent } from './lastfm/lastfm.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateTrackComponent,
    SavetrackComponent,
    DeletetrackComponent,
    SearchtrackComponent,
    LastfmComponent,
    WishlistComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
      {path:'home', component : HomeComponent},
      {path:'search', component:SearchtrackComponent},
      {path:'searchtrack/:trackname',component:LastfmComponent},
      {path:'savetrack/:mbid',component:SavetrackComponent},
      {path:'getwishlist', component :WishlistComponent},
      {path:'delete/:mbid', component: DeletetrackComponent},
      {path:'update/:mbid/:comment',component : UpdateTrackComponent}
      
    ])
  ],
  providers: [MizixHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

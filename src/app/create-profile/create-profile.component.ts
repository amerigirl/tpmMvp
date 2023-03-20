import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent {


  constructor(private http: HttpClient, private profileService: ProfileService){}


  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}) {
      //console.log(newProfile)
  const headers = new HttpHeaders({'myHeader': 'profile'});

  //this post request takes 3 params
  this.http.post<{name: string}>(
      'https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json',
      newProfile, {headers: headers})
      .subscribe((res) => {
        console.log(res)
      });

  }

 }

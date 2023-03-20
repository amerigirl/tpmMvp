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
  allProfiles: Profile[] = [];

  constructor(private http: HttpClient, private profileService: ProfileService){}


  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}) {
    this.profileService.createProfile(newProfile);
  }

 }

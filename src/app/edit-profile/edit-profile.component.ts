import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService} from '../Service/profiles.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CreateProfileComponent } from '../create-profile/create-profile.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    allProfiles: Profile[] = [];


ngOnInit(){
  this.privateonProfilesFetch();
  }




constructor(private http: HttpClient, private profileService: ProfileService){}


createProfile(newProfile: { Name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}){
this.profileService.createProfile(newProfile);
}


  privateonProfilesFetch(){  //assigns the profiles we get from the service to the allProfiles array

    this.profileService.fetchProfile()
     .subscribe((profiles:any)=>{
      this.allProfiles = profiles;
    });
    }

  onDeleteProfile(id: string){
    this.http.delete('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles/' + id +'.json')
    .subscribe();
  }

  returnToForm(){

  }
  onEditClicked(id:string){

  //gets the product via id
    let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
    console.log(currentProduct);


  }
}


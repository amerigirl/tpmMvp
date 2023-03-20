import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';
import { NgForm } from '@angular/forms';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent implements OnInit{
  allProfiles: Profile[] = [];
  @ViewChild('cForm') form:  NgForm | undefined;
  editmode: boolean = false;
  currentProfileId!: string;
  headers = new HttpHeaders({'myHeader': 'profile'});

  constructor(private http: HttpClient, private profileService: ProfileService){}


  //creating profiles
  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string, zipcode:string, phone:string, email:string, location: string}) {
    //console.log(newProfile)
    if(!this.editmode){
      this.profileService.createProfile(newProfile);
    } else{
      this.profileService.updateProduct(this.currentProfileId, newProfile );
    }
  }
  verificationAlert(form:string){
    alert("Form Submitted!")
  }


  //fetching profiles
  //assigns the profiles we get from the service to the allProfiles array

  ngOnInit(){
    this.privateonProfilesFetch();
  }

  privateonProfilesFetch(){

    this.profileService.fetchProfile()
     .subscribe((profiles:any)=>{
      this.allProfiles = profiles;
    });
  }

  onEditClicked(id:string){
    this.currentProfileId = id;
      //gets the product via id
        let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
        //console.log(this.form);
        this.form?.setValue({
          name: currentProduct?.name,
          address: currentProduct?.address,
          city: currentProduct?.city,
          state: currentProduct?.state,
          zipcode: currentProduct?.zipcode,
          phone: currentProduct?.phone,
          email: currentProduct?.email,
          location: currentProduct?.location

        });

        this.editmode = true;

  }

  //deleting profiles
  onDeleteProfile(id: string){
  this.http.delete('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles/' + id +'.json')
    .subscribe();
  }

}

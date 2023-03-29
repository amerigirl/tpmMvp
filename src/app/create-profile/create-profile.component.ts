import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';
import { NgForm } from '@angular/forms';


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


  //creates profiles
  onProfileCreate(newProfile: { Fname: string, Mname: string, Lname: string, TAddress:string, TemailAddress:string, Tlocation: string, id: string, Tstandard: string}) {
    
    if(!this.editmode){
      this.profileService.createProfile(newProfile);
    } else{
      this.profileService.updateProfile(this.currentProfileId, newProfile );
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
      console.log("this.allProfiles on fetchmethod" + this.allProfiles);
    });
  }

  onEditClicked(id:string){
    console.log(id);
    this.privateonProfilesFetch();
    this.currentProfileId = id;
      //gets the product from the backend via id
      console.log("this.allProfiles onclickedmethod" + this.allProfiles);
        let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
        console.log("currentProduct" + currentProduct);
        this.form?.setValue({
          Fname: currentProduct?.Fname,
          Mname: currentProduct?.Mname,
          Lname: currentProduct?.Lname,
          TAddress: currentProduct?.TAddress,
          TemailAddress: currentProduct?.TemailAddress,
          Tlocation: currentProduct?.Tlocation,
          Tstandard: currentProduct?.Tstandard,
          id: currentProduct?.id

        });

        this.editmode = true;

  }

  //deletes profiles
  onDeleteProfile(id: string){
    this.profileService.deleteProfile(id);
    alert("Profile deleted!");
    location.reload();
  }

}

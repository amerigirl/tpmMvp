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
  onProfileCreate(newProfile: { Fname: string, Mname: string, Lname: string, Taddress: string, TemailAddress:string, Tlocation: string, id: string, Tstandard: string}) {
    
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
    });
  }

  onEditClicked(id:string){
    this.currentProfileId = id;
      //gets the product from the backend via id
        let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
        
        this.form?.setValue({
          firstName: currentProduct?.Fname,
          middleName: currentProduct?.Mname,
          lastName: currentProduct?.Lname,
          address: currentProduct?.Taddress,
          email: currentProduct?.TemailAddress,
          location: currentProduct?.Tlocation,
          standard: currentProduct?.Tstandard

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

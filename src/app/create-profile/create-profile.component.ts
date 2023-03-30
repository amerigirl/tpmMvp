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

  //new vars
  allProfiles: Profile[] = [];
  @ViewChild('cForm') form:  NgForm | undefined;
  editmode: boolean = false;
  currentProfileId!: string;

  headers = new HttpHeaders({
    'myHeader': 'profile',
    'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/json'
  });


  //injects HTTP services
  constructor(private http: HttpClient, private profileService: ProfileService){}

  //creates profiles with alert
  onProfileCreate(newProfile: { fname: string, mname: string, lname: string, tAddress:string, temailAddress:string, tlocation: string, id: string, tstandard: string}) {
    
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


  //updates profile
  onEditClicked(id:string){
    this.privateonProfilesFetch();
    this.currentProfileId = id;
     
        let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
        this.form?.setValue({
          Fname: currentProduct?.fname,
          Mname: currentProduct?.mname,
          Lname: currentProduct?.lname,
          TAddress: currentProduct?.tAddress,
          TemailAddress: currentProduct?.temailAddress,
          Tlocation: currentProduct?.tlocation,
          Tstandard: currentProduct?.tstandard,
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

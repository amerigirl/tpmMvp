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


  
  constructor(private http: HttpClient, private profileService: ProfileService){}

  //creates profiles with alert
  onProfileCreate(newProfile: { 
    fname: string, 
    mname: string, 
    lname: string, 
    taddress:string, 
    temailAddress:string, 
    tlocation: string, 
    id: string, 
    tstandard: string
  }) {  
   
       if(!this.editmode){
      this.profileService.createProfile(newProfile);
    } else{
      this.profileService.updateProfile(this.currentProfileId, newProfile );
    } 
 
 }

  // verificationAlert(form:string){
  //   alert("Form Submitted!")
   
  // }


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


  //updates profile only works if you omit set id param!!
  onEditClicked(id:string){
    this.privateonProfilesFetch();
    this.currentProfileId = id;
     
      let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
      this.form?.setValue({
        fname: currentProduct?.fname,
        mname: currentProduct?.mname,
        lname: currentProduct?.lname,
        taddress: currentProduct?.taddress,
        temailAddress: currentProduct?.temailAddress,
        tlocation: currentProduct?.tlocation,
        tstandard: currentProduct?.tstandard,
       
      });
    this.editmode = true;
  }

  //deletes profiles
  onDeleteProfile(id: string){
    this.profileService.deleteProfile(id);
    // alert("Profile deleted!");
    // location.reload();
  }

}

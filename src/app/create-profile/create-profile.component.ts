import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';
import { NgForm } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { style } from '@angular/animations';
import { elementAt } from 'rxjs';


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
  noIdBox: boolean = false;
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
            let tempProfile = { fname: newProfile.fname, mname:newProfile.mname, lname: newProfile.lname,  taddress: newProfile.taddress, temailAddress:newProfile.temailAddress, tlocation: newProfile.tlocation, tstandard:newProfile.tstandard}
            this.profileService.createProfile(tempProfile);
            alert("Your form was submitted!") 
            location.reload();

          } else if(this.editmode) {
            console.log("edit mode should be true")
            this.profileService.updateProfile(this.currentProfileId, newProfile ); 
           alert("Update Complete!")
           location.reload();
          } 
 
  }


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

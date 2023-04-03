import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';
import { NgForm } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { UpdateModel } from '../model/updateModel';
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
  updateModel!: UpdateModel;
  
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

        
      } 
      else if(this.editmode) {
       console.log("edit mode should be true")
      this.profileService.updateProfile(this.currentProfileId, newProfile ); //but I think this wrong, shouldn't it be currentProduct?
      
 
    } 
 
 }




 //this can be updated to reflect what to do if edit mode is on (set to update complete)
  // verificationAlert(form:string){
  //   alert("Form Submitted!")
   
  // }


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
        id: currentProduct?.id
      });
    this.editmode = true;
    
  }
//maybe you need a new method attached specifically to the update button/if editmode?


//deletes profiles
  onDeleteProfile(id: string){

    this.profileService.deleteProfile(id);
    alert("Profile deleted!");
    location.reload();
  }


}

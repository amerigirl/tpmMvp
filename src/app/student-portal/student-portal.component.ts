import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { studentProfile } from '../model/studentProfile';
import { ProfileService } from '../Service/profiles.service';


@Component({
  selector: 'student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent  {

  title: 'ReactiveForms';
  reactiveForm: FormGroup

studentProfile: studentProfile[] = [];

constructor(private http: HttpClient, private profileService: ProfileService){}


ngOnInit(){

  //we created a new form and form controls
  this.reactiveForm = new FormGroup({
  
       
        fname: new FormControl('', [Validators.required]) ,
        mname: new FormControl(null),
        lname: new FormControl('', [Validators.required]),
        Saddress: new FormControl(null),
        SemailAddress:new FormControl((null),[Validators.email, Validators.required]),
        Slocation:new FormControl(null),
        Sstandard: new FormControl(null),
        StotalMarks: new FormControl(null),
        Sgrade: new FormControl('', [Validators.required]),
        id: new FormControl(null)
  })
   this.privateonProfilesFetchStudent();
  
}


onSubmit(reactiveForm: any){
  console.log(this.reactiveForm.value)

}

privateonProfilesFetchStudent(){
  this.profileService.fetchStudentProfile()
   .subscribe((profiles:any)=>{
    this.studentProfile = profiles;
    console.log(profiles)
  });
}

  onProfileCreate(newStudentProfile: {
    id: string, 
    fname: string, 
    mname: string, 
    lname: string, 
    saddress: string, 
    semailAddress:string, 
    slocation: string, 
    sstandard: string,
    stotalmarks: string,
    sgrade: string
}){

  let tempStudentProfile = {
    fname: newStudentProfile.fname, 
    mname:newStudentProfile.mname, 
    lname: newStudentProfile.lname,  
    saddress: newStudentProfile.saddress, 
    semailAddress:newStudentProfile.semailAddress, 
    slocation: newStudentProfile.slocation,
    sstandard:newStudentProfile.sstandard};

    this.profileService.createStudentProfile(tempStudentProfile)
    alert("Your form was submitted")


}

}

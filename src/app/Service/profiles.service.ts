import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";
import { StudentPortalComponent } from "../student-portal/student-portal.component";
import { studentProfile } from "../model/studentProfile";



@Injectable({providedIn: "root"})
export class ProfileService{
url = 'https://localhost:7142/api/Teachers';
urlStudent = 'https://localhost:7142/api/Students';

headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-control-allow-headers': '*', 
  'Access-control-allow-methods': '* '
});
    
constructor(private http: HttpClient){}

//creates Teacher profile in the database
createProfile(newProfile:any){
   
  this.http.post<any>(this.url, newProfile, {headers: this.headers})
    .subscribe((res) => {});

}

//creates Student profile in the database
createStudentProfile(newStudentProfile: any){
  
  this.http.post<any>(this.urlStudent, newStudentProfile, {headers: this.headers})
  .subscribe((res) =>{});
}

//fetch profiles from the database
//<{[key: string]: Profile}> sets the structure for the observable that returns

fetchProfile(){
    return this.http.get<{[key: string]: Profile}>('https://localhost:7142/api/Teachers')
    .pipe(map((res: any)=>{

     const profiles = [];
      
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
      if(res.hasOwnProperty(key)) 
      profiles.push({...res[key]});
    }
    return profiles;
    }));

  }


  fetchStudentProfile(){
    return this.http.get<{[key: string]: studentProfile}>('https://localhost:7142/api/Students')
    .pipe(map((res:any) =>{
      const studentProfiles = [];

      for(const key in res) {
        if(res.hasOwnProperty(key))
        studentProfiles.push({...res[key]});
      }
      return studentProfiles;
    }))
  }

 //updating the current product
  updateProfile(id: string, currentProduct: Profile){
   this.http.put(`https://localhost:7142/api/Teachers/${id}`, currentProduct)
   .subscribe();
  }

  deleteProfile(Id: string){
   this.http.delete(`https://localhost:7142/api/Teachers/${Id}`, {headers: this.headers})
   .subscribe();
  }

}

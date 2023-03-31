import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";


@Injectable({providedIn: "root"})
export class ProfileService{
url = 'https://localhost:7142/api/Teachers';

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-control-allow-headers': '*', 
      'Access-control-allow-methods': '* '
    });
    
  constructor(private http: HttpClient){}

  //create profile in the database
  createProfile(newProfile: { id: string, fname: string, mname: string, lname: string, taddress: string, temailAddress:string, tlocation: string, tstandard:string}){

 

    //this post request takes 3 params
    this.http.post<any>(this.url, newProfile, {headers: this.headers})
      .subscribe((res) => {
      console.log(res)  
      
    });

  }

  //fetch profile from the database
  //<{[key: string]: Profile}> sets the structure for the observablet that returns

  fetchProfile(){
    return this.http.get<{[key: string]: Profile}>('https://localhost:7142/api/Teachers')
    .pipe(map((res: any)=>{

    const profiles = [];
      
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
        if(res.hasOwnProperty(key)) //this is how you check if a property is in an object
        profiles.push({...res[key]});
      }

    return profiles;
    }));

  }

  updateProfile(Id: string, value: Profile){
    this.http.put(`https://localhost:7142/api/Teachers/${Id}`, value, {headers:this.headers})
    .subscribe();

  }

  deleteProfile(Id: string){
    this.http.delete(`https://localhost:7142/api/Teachers/${Id}`, {headers: this.headers})
    .subscribe();
  }
}

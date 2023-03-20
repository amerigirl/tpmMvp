import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";

@Injectable({providedIn: "root"})
export class ProfileService{


  constructor(private http: HttpClient){}

  //create profile in the database
  createProfile(newProfile: { Name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}){
 
   const headers = new HttpHeaders({'myHeader': 'profile'});

   //this post request takes 3 params
   this.http.post<{name: string}>(
   'https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json',
   newProfile, {headers: headers})
   .subscribe((res) => {
     console.log(res)
   });

  }

  //fetch profile from the database
  //<{[key: string]: Profile}> sets the structure for the observablet that returns

  fetchProfile(){
    return this.http.get<{[key: string]: Profile}>('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json')
    .pipe(map((res: any)=>{
    const profiles = [];
    //loops through keys in the response, returns matches from the server
      for(const key in res) {
        if(res.hasOwnProperty(key))
        profiles.push({...res[key], id: key});
       }

    return profiles;
    }));

  }

  deleteProfile(){}
}

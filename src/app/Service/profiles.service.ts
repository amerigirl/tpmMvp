import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";

@Injectable({providedIn: "root"})
export class ProfileService{


  constructor(private http: HttpClient){}

  //create profile in the database
  createProfile(newProfile: { fname: string, mname: string, lname: string, tAddress: string, temailAddress:string, tlocation: string, tstandard:string}){

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json',
      'Accept':'text/plain',
      'Access-Control-Allow-Methods': 'POST, GET'

    });

    //this post request takes 3 params
    this.http.post<{name: string}>(
     'https://localhost:7142/api/Teachers/',
      newProfile, {headers: headers})
      .subscribe((res) => {
      console.log(res)  
      
    });

  }

  //fetch profile from the database
  //<{[key: string]: Profile}> sets the structure for the observablet that returns

  fetchProfile(){
    return this.http.get<{[key: string]: Profile}>('https://localhost:7142/api/Teachers/')
    .pipe(map((res: any)=>{

    const profiles = [];
      
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
        if(res.hasOwnProperty(key)) //this is how you check if a property is in an object
        profiles.push({...res[key], id: key});
      }

    return profiles;
    }));

  }

  updateProfile(id: string, value: Profile){
    this.http.put('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles/' + id +'.json', value)
    .subscribe();

  }

  deleteProfile(id: string){
    this.http.delete('https://localhost:7142/api/Teachers/' + id +'.json')
    .subscribe();
  }
}

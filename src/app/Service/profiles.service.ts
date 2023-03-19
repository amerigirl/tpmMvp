import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/products";

@Injectable({providedIn: "root"})
export class ProfileService{

  constructor(private http: HttpClient){

  }
  createProfile(newProfile: { name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}){
    //console.log(newProfile)
    const headers = new HttpHeaders({'myHeader': 'profile'});

    //this post request takes 3 params
    this.http.post<{name: string}>(
        'https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json',
        newProfile, {headers: headers})
        .subscribe((res) => {
          console.log(res)
        });

  }

  //you call it here because when the page loads, it will then list all the things in the database

  fetchprofile(){
    this.fetchProfiles();
  }

  //"<{[key: string]: Profile}>" takes what comes gack and puts it in the key/value form (so does lin 55 in the push method)
  private fetchProfiles(){
    this.http.get<{[key: string]: Profile}>('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json')
    .pipe(map((res: any)=>{
      const profiles = [];
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
        if(res.hasOwnProperty(key))
        profiles.push({...res[key], id: key})
        }
        return profiles;
      }))
      .subscribe((profiles)=>{
        console.log(profiles);
      })

  }
}




import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";

@Injectable({providedIn: "root"})
export class ProfileService{

  constructor(private http: HttpClient){

  }


  //you call it here because when the page loads, it will then list all the things in the database, yea?

  // fetchprofile(){
  //   this.fetchProfiles();
  // }


}




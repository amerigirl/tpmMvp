import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Profile } from '../model/products';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent implements OnInit {
  allProfiles: Profile[] = [];

  constructor(private http: HttpClient){}


  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}) {

    const headers = new HttpHeaders({'myHeader': 'profile'});

      //this post request takes 3 params
    this.http.post<{name: string}>('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json', newProfile, {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })

  }


  //call the fetch method from ngOnInit method
  //you call it here because when the page loads, it will then list all the things in the database

  ngOnInit(){
  this.fetchProfiles();
  }

  onProfilesFetch(){  //why do we need this method?
  this.fetchProfiles();
  }
//"<{[key: string]: Profile}>" takes what comes gack and puts it in the key/value form (so does lin 55 in the push method)
  private fetchProfiles(){
    this.http.get<{[key: string]: Profile}>('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json')

    //the pipe transforms the response so that it is more readable

    .pipe(map((res: any)=>{
      const profiles = [];
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
        if(res.hasOwnProperty(key))
        profiles.push({...res[key], id: key})
        }
        return profiles;
      }))
//profiles = res; response from the pipe
      .subscribe((profiles)=>{
      console.log(profiles)
      this.allProfiles = profiles;
    })

  }

}

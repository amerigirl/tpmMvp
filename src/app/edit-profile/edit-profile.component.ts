import { Component } from '@angular/core';
import { ProfileService} from '../Service/profiles.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { map } from 'rxjs';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

constructor(private http: HttpClient, private profileService: ProfileService){}
allProfiles: Profile[] = [];
createProfile(newProfile: { Name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}){
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

ngOnInit(){
  this.fetchProfiles();
  }

  privateonProfilesFetch(){  //why do we need this method?
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
      this.allProfiles = profiles;
    })

}



}
 // //accessing the service via profile.service
    // private fetchProfiles(){
    //  this.profileService.fetchprofile();

    // }

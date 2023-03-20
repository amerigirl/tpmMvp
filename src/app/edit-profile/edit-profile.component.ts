import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../Service/profiles.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { map } from 'rxjs';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

ngOnInit(){
  this.privateonProfilesFetch();
  }


constructor(private http: HttpClient, private profileService: ProfileService){}
allProfiles: Profile[] = [];
createProfile(newProfile: { Name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}){
this.profileService.createProfile(newProfile);
}


  privateonProfilesFetch(){  //assigns the profiles we get from the service to the allProfiles array
    
    this.profileService.fetchProfile()
     .subscribe((profiles:any)=>{
      this.allProfiles = profiles;
    });
    }

  onDeleteProfile(id: string){
    this.http.delete('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles/' + id +'.json')
    .subscribe();
  }

}

 // //accessing the service via profile.service
    // private fetchProfiles(){
    //  this.profileService.fetchprofile();

    // }

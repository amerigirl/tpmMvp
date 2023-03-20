import { Component } from '@angular/core';
import { ProfileService} from '../Service/profiles.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

constructor(private http: HttpClient, private profileService: ProfileService){}

ngOnInit(){
  this.fetchProfiles();
  }

  privateonProfilesFetch(){  //why do we need this method?
    this.fetchProfiles();
    }

    //accessing the service via profile.service
    private fetchProfiles(){
     this.profileService.fetchprofile();

    }


}

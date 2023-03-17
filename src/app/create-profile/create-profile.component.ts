import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent {

  constructor(private http: HttpClient){
    
  }

  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string,
                              zipcode:number, phone:string, email:string, location: string}) {
    console.log(newProfile);
    this.http.post('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json', newProfile)
    .subscribe((res) => {
      console.log(res)
    })

  }

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent {

  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string,
                              zipcode:number, phone:string, email:string, location: string}) {
     console.log(newProfile);
     console.log("working")
  }
}

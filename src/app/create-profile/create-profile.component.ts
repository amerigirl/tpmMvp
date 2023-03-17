import { Component, Directive } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-profile',
  exportAs: 'profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent {

constructor(private http: HttpClient){

}
  onCreateProfile(p: {
    name: string,
    address: string,
    city:string,
    state:string,
    zipcode:number,
    phone:string, //there will be () in the number, so it should be a string
    email:string,
    location: string
  }){
    console.log(p);
  }
}

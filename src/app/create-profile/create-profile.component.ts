import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Profile } from '../model/profile';
import { ProfileService } from '../Service/profiles.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent implements OnInit{
  allProfiles: Profile[] = [];
  headers = new HttpHeaders({'myHeader': 'profile'});

  constructor(private http: HttpClient, private profileService: ProfileService){}

  ngOnInit(){
    this.privateonProfilesFetch();
    }


  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string, zipcode:number, phone:string, email:string, location: string}) {
      //console.log(newProfile)


  //this post request takes 3 params
  this.http.post<{name: string}>(
      'https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json',
      newProfile, {headers: this.headers})
      .subscribe((res) => {
        console.log(res)
      });

  }

  verificationAlert(form:string){
    alert("Form Submitted!")
  }

  privateonProfilesFetch(){  //assigns the profiles we get from the service to the allProfiles array

    this.profileService.fetchProfile()
     .subscribe((profiles:any)=>{
      this.allProfiles = profiles;
    });
    }

    onEditClicked(id:string){

      //gets the product via id
        let currentProduct = this.allProfiles.find((p)=>{return p.id == id})
        console.log(currentProduct);


      }

      onDeleteProfile(id: string){
        this.http.delete('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles/' + id +'.json')
        .subscribe();
      }

 }

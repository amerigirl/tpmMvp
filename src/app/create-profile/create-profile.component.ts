import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})



export class CreateProfileComponent implements OnInit {

  constructor(private http: HttpClient){

  }

  onProfileCreate(newProfile: { name: string, address: string, city:string, state:string,
                              zipcode:number, phone:string, email:string, location: string}) {
    //console.log(newProfile);

    const headers = new HttpHeaders({'myHeader': 'profile'});

    this.http.post('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json', newProfile, {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })

  }


  //call the fetch method from ngOnInit method
  //you call it here because when the page loads, it will then list all the things in the database

  ngOnInit(){
  this.fetchProfiles();
  }

  onProfilesFetch(){  //why do we need this method
  this.fetchProfiles();
  }

  private fetchProfiles(){
    this.http.get('https://mvptpm-61807-default-rtdb.firebaseio.com/profiles.json')

    /*
      the pipe transforms the response so that it is more readable in the console
    */
    .pipe(map((res: any)=>{
      const profiles = [];

        for(const key in res) {
          if(res.hasOwnProperty(key))
          profiles.push({...res[key], id: key})
        }
        return profiles;
      }))

      .subscribe((res)=>{
      console.log(res)
    })

  }

}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";
import { Profile } from "../model/profile";



@Injectable({providedIn: "root"})
export class ProfileService{
url = 'https://localhost:7142/api/Teachers';

headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-control-allow-headers': '*', 
  'Access-control-allow-methods': '* '
});
    
constructor(private http: HttpClient){}

//creates profile in the database
createProfile(newProfile:any){
   
  this.http.post<any>(this.url, newProfile, {headers: this.headers})
    .subscribe((res) => {   
    });

}

//fetch profiles from the database
//<{[key: string]: Profile}> sets the structure for the observable that returns

fetchProfile(){
    return this.http.get<{[key: string]: Profile}>('https://localhost:7142/api/Teachers')
    .pipe(map((res: any)=>{

     const profiles = [];
      
      //loops through keys in the response, returns matches from the server
      for(const key in res) {
      if(res.hasOwnProperty(key)) 
      profiles.push({...res[key]});
    }
    return profiles;
    }));

  }

 //updating the current product
  updateProfile(id: string, currentProduct: Profile){
   this.http.put(`https://localhost:7142/api/Teachers/${id}`, currentProduct)
   .subscribe();
  }

  deleteProfile(Id: string){
   this.http.delete(`https://localhost:7142/api/Teachers/${Id}`, {headers: this.headers})
   .subscribe();
  }

}

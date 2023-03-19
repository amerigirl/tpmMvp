import { NgZone } from "@angular/core";

export class Profile {

constructor(public name: string, public address: string, public city:string, public state:string,
  public zipcode:number, public phone:string, public email:string, public location: string, public id?: string) {

    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phone = phone;
    this.email = email;
    this.location = location;
    this.id = id;
  }

}

import { NgZone } from "@angular/core";

export class Profile {

constructor(public id: string, public Fname: string, public Mname: string, public Lname: string, public Taddress: string, public TemailAddress:string, public Tlocation: string, public Tstandard: string) {

    this.id = id;
    this.Fname = Fname;
    this.Mname = Mname;
    this.Lname = Lname;
    this.Taddress = Taddress;
    this.TemailAddress = TemailAddress;
    this.Tlocation = Tlocation;
    this.Tstandard = Tstandard;
  }

}

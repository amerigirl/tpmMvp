import { NgZone } from "@angular/core";

export class Profile {

constructor(
  public id: string, 
  public fname: string, 
  public mname: string, 
  public lname: string, 
  public taddress: string, 
  public temailAddress:string, 
  public tlocation: string, 
  public tstandard: string
  
  ) {
    this.id  = id;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.taddress = taddress;
    this.temailAddress = temailAddress;
    this.tlocation = tlocation;
    this.tstandard = tstandard;
  }

}

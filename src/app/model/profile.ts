import { NgZone } from "@angular/core";

export class Profile {

constructor(
  public Id: string, 
  public fname: string, 
  public mname: string, 
  public lname: string, 
  public tAddress: string, 
  public temailAddress:string, 
  public tlocation: string, 
  public tstandard: string) 
  
  {
    this.Id = Id;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.tAddress = tAddress;
    this.temailAddress = temailAddress;
    this.tlocation = tlocation;
    this.tstandard = tstandard;
  }

}




export class UpdateModel{

constructor(public fname: string, 
    public mname: string, 
    public lname: string, 
    public taddress: string, 
    public temailAddress:string, 
    public tlocation: string, 
    public tstandard: string
    
    ) {

        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.taddress = taddress;
        this.temailAddress = temailAddress;
        this.tlocation = tlocation;
        this.tstandard = tstandard;
    }

}

export class studentProfile{

    constructor(
        public id: string, 
        public fname: string, 
        public mname: string, 
        public lname: string, 
        public saddress: string, 
        public semailAddress:string, 
        public slocation: string, 
        public sstandard: string,
        public stotalmarks: string,
        public sgrade: string
        
        ) {
          this.id  = id;
          this.fname = fname;
          this.mname = mname;
          this.lname = lname;
          this.saddress = saddress;
          this.semailAddress = semailAddress;
          this.slocation = slocation;
          this.sstandard = sstandard;
          this.stotalmarks = stotalmarks;
          this.sgrade = sgrade;
        }
    }

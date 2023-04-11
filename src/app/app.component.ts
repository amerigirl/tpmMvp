import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mvpWork';
  reactiveForm: any = FormGroup;
  
  ngOnInit(){
  this.reactiveForm = new FormGroup({  //creates a new javascript object
     firstName: new FormControl(null),
     middleName: new FormControl(null),
     lastName: new FormControl(null),
     address: new FormControl(null),
     emailAddress: new FormControl(null),

  })
  }
}

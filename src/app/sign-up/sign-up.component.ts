import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log("submitted value: ",this.signUpForm.value)
  }
  
  states: string[] = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
    "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand","West Bengal"
  ];
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;
  
  constructor( private router: Router, 
  
    ) { }

  ngOnInit(): void {
  }

  btnlogin()
  {

    if(this.user == "sample@gmail.com" && this.password == "1234"){
      
      location.href = '/success'
    }
    else{
      alert("invalid credentials")
    }
    
  }

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })
  get email(){return this.loginform.get('email')}
}

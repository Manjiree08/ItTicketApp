import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errMsg=[];
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    this.authService.log();
    localStorage.setItem('isLoggedIn', "true");  
    if(this.loginForm.value.username=='admin@gmail.com' &&
    this.loginForm.value.password=='123'){
      this.router.navigate(['view-ticket'], { queryParams: {status:'Resolve'}});
    }
    else{
      this.router.navigate(['ticket']);
    }
  }
}

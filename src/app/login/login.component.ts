import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errMsg=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.value.username=='admin' &&
    this.loginForm.value.password=='123'){
      this.router.navigate(['view-ticket'], { queryParams: {status:'Resolve'}});
    }
    else{
      this.router.navigate(['ticket']);
    }
  }
}
/* username: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]) */
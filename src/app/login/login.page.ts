import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  submitted = false;
  constructor(public router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
    console.info("login-ngOnInit");
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get errorControl() {
    return this.login_form.controls;
  }
  
  doLogin(){
    // 1.validate user email/passowrd
    // 2.call login api service
    // 3.redirect to Home if login success else show error to user & stays in login screen itself

    this.router.navigate(['/home']);
  }
  onSubmit(){
    this.submitted = true;
    console.info("onSubmit",this.login_form.invalid);
    if (this.login_form.invalid) {
      return;
    }
    console.info('login api',this.login_form.value);
    this.doLogin();
  }
  // fresh code for new changes
  doSignUp(){
    this.router.navigate(['/register']);
  }
}

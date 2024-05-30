import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  language = 'en';
  constructor(public router: Router) { }

  ngOnInit() {
    console.info("ngoninit");
  }
  
  openChooseLangModal(){
    console.info("openChooseLangModal()")
    this.router.navigate(['/langauge']);
  }
  goToLoginPage(){
    console.info("goToLoginPage()");
    this.router.navigate(['/login-phone']);
  }
}

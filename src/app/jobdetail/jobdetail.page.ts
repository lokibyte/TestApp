import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.page.html',
  styleUrls: ['./jobdetail.page.scss'],
})
export class JobdetailPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goBack(){
    console.info("goBack()");
    this.router.navigate(['/home/main'])
  }
}

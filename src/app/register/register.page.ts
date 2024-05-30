import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  doRegister(){
    // this.router.navigate(['/home']);
  }
  locationChange(){
    this.validateRegistration();
  }
  nameChange(){
    this.validateRegistration();
  }
  onSelect(role:any,idx:any){
    this.selectedFltr = idx;
    role.selected = true;
    this.selectedroles.push(role);
    this.validateRegistration();
  }
  onisRoleChange(evt:any){
    console.info(evt.target.checked);
    if(evt.target.checked){
      this.isanyrolechekced = true;
    }else{
      this.isanyrolechekced = false;
    }
    this.validateRegistration();
  }
  validateRegistration(){
    console.info(this.selectedroles,)
    console.info("isDisabled",this.isDisabled,this.selectedroles,this.isanyrolechekced,this.name,this.location);
    if( (this.selectedroles.length > 0 || this.isanyrolechekced) && this.name.length > 0 && this.location.length > 0){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
}

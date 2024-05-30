import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPhonePageRoutingModule } from './login-phone-routing.module';

import { LoginPhonePage } from './login-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPhonePageRoutingModule
  ],
  declarations: [LoginPhonePage]
})
export class LoginPhonePageModule {}

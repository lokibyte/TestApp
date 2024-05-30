import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchjobPageRoutingModule } from './searchjob-routing.module';

import { SearchjobPage } from './searchjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchjobPageRoutingModule
  ],
  declarations: [SearchjobPage]
})
export class SearchjobPageModule {}

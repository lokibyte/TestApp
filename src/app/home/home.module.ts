import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { JobComponent } from '../shared/components/job/job.component';
import {LangaugeselectorComponent} from '../shared/components/langaugeselector/langaugeselector.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,JobComponent,LangaugeselectorComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
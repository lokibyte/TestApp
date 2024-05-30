import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-langaugeselector',
  templateUrl: './langaugeselector.component.html',
  styleUrls: ['./langaugeselector.component.scss'],
})
export class LangaugeselectorComponent  implements OnInit {
  selectedlang = 'en';
  languageselected: string;
  constructor(private modalCtrl: ModalController,private _translate: TranslateService) {}

  ngOnInit() {}

  confirm() {
    return this.modalCtrl.dismiss(this.languageselected, 'confirm');
  }
  onLanguageChange(e:any){
    this.selectedlang = e.target.value;
    this._translate.use(this.selectedlang);
    console.info(this.selectedlang);
  }
}

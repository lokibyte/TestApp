import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangaugeService {

  constructor(private translate: TranslateService) { }

  getDefaultLanguage(){ 
    let language = "en";
    this.translate.setDefaultLang(language);
    return language; 
  } 
  setLanguage(setLang:string) { 
    this.translate.use(setLang); 
  }
}

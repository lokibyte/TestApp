import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NetworkService } from 'src/app/shared/services/network.service';
import { HttpService } from './shared/services/http.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private translate:TranslateService, private networkService:NetworkService,private httpService:HttpService) {
    console.info("app componet constructor");
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en','ka','te']);
    console.info("apps constructor");
  }
  async ngOnInit() {
    console.info("apps ngOnInit");
    let status = await this.networkService.getCurrentNetworkStatus();
    console.info("status",status.connected);
    // const url = "https://reqres.in/api/users";
    // const reqObj = {
    //      name: "paul rudd",
    //      movies: ["I Love You Man", "Role Models"]
    //  };
    // let res = await this.httpService.doPost(url,reqObj,{});
    // console.info("res",res);
  }

}

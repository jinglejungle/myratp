import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public items: string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

  ngOnInit() {
  }

 
 public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}

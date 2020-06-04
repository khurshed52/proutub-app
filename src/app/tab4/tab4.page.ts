import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  theme:string = 'light';
  constructor() { }

  ngOnInit() {
  }

    // switch theme
    public switchTheme() {
      if(this.theme == "light") {
        document.body.classList.add('dark');
        this.theme = "dark"
      } else {
        document.body.classList.remove('dark');
        this.theme = 'light'
      }
    }

}

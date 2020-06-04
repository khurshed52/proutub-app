import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  theme:string = 'Light';
  constructor() { }

  ngOnInit() {
  }

    // switch theme
    public switchTheme() {
      if(this.theme == "Light") {
        document.body.classList.add('dark');
        this.theme = "Dark"
      } else {
        document.body.classList.remove('dark');
        this.theme = 'Light'
      }
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    pagination: true
  } 

 images = [
   {id: 1, url:'../../assets/images/slide-1.svg', text: 'Grow Your YouTube Channel with Genuine Views, Likes, Subscribers and Comments.'},
 ]


}

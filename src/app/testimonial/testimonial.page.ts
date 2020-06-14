import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss'],
})
export class TestimonialPage implements OnInit {

  constructor() { }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    pagination: true
  }

  ngOnInit() {
  }

}

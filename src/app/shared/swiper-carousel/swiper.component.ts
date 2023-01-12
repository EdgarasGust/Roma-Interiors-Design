import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, Pagination, Virtual } from 'swiper';

import { SwiperService } from 'src/app/services/swiper.service';
import { Subscription } from 'rxjs';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';

SwiperCore.use([Autoplay, Navigation, Virtual, Pagination]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class SwiperJSComponent implements OnInit, OnDestroy {
  carouselImages: any[] | undefined = [];
  observerSubscription: Subscription;

  constructor(
    private swiperService: SwiperService,
    private breakPointObsService: BreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.observerSubscription =
      this.breakPointObsService.breakpointObserver.subscribe((state) => {
        state === 'mobile'
          ? (this.carouselImages =
              this.swiperService.getCarouselImages('mobile'))
          : (this.carouselImages =
              this.swiperService.getCarouselImages('large'));
      });
  }

  ngOnDestroy(): void {
    this.observerSubscription.unsubscribe();
  }
}

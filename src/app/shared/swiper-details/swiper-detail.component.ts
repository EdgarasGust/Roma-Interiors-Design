import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Keyboard, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Keyboard]);

import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-swiper-detail',
  templateUrl: './swiper-detail.component.html',
  styleUrls: ['./swiper-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiperRef', { static: false }) swiper: SwiperComponent;

  images: undefined | string[] = [];
  projectId: string;
  imageIndex: number;

  constructor(
    private swiperService: SwiperService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.queryParams['project'];
    this.imageIndex = this.route.snapshot.queryParams['index'];
    this.images = this.swiperService.getImages(this.projectId);
  }

  ngAfterViewInit(): void {
    if (this.swiper) {
      this.swiper.swiperRef.slideTo(this.imageIndex, 0);
    }
  }

  close() {
    this.location.back();
  }
  ngOnDestroy(): void {}
}

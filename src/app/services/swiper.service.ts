import { Injectable } from '@angular/core';

import * as images from './images';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {
  constructor() {}

  getCarouselImages(size: string) {
    if (size == 'mobile') {
      return images.carouselMobile.slice();
    }
    if (size == 'large') {
      return images.carousel.slice();
    } else return;
  }

  getImages(projectId: string) {
    if (projectId == 'carousel') {
      return images.carousel.slice();
    }
    if (projectId == 'projectOne') {
      return images.projectOneImages.slice();
    }
    if (projectId == 'projectTwo') {
      return images.projectTwoImages.slice();
    }
    if (projectId == 'projectThree') {
      return images.projectThreeImages.slice();
    }
    if (projectId == 'projectFour') {
      return images.projectFourImages.slice();
    }
    if (projectId == 'projectFive') {
      return images.projectFiveImages.slice();
    }
    if (projectId == 'projectSix') {
      return images.projectSixImages.slice();
    }
    if (projectId == 'projectSeven') {
      return images.projectSevenImages.slice();
    }
    if (projectId == 'projectEight') {
      return images.projectEightImages.slice();
    }
    if (projectId == 'projectNine') {
      return images.projectNineImages.slice();
    } else return;
  }
}

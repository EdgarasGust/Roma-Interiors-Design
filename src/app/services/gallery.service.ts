import { Injectable } from '@angular/core';
import * as images from './images';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor() {}

  getProjectOneImages() {
    return images.projectOneImages.slice();
  }
  getProjectTwoImages() {
    return images.projectTwoImages.slice();
  }
  getProjectThreeImages() {
    return images.projectThreeImages.slice();
  }
  getProjectFourImages() {
    return images.projectFourImages.slice();
  }
  getProjectFiveImages() {
    return images.projectFiveImages.slice();
  }
  getProjectSixImages() {
    return images.projectSixImages.slice();
  }
  getProjectSevenImages() {
    return images.projectSevenImages.slice();
  }
  getProjectEightImages() {
    return images.projectEightImages.slice();
  }
  getProjectNineImages() {
    return images.projectNineImages.slice();
  }
}

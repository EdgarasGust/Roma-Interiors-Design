import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  projects: any[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.projectImages();
  }

  test(image: any) {
    console.log(image);
  }

  projectImages() {
    this.projects.push({
      name: 'Epping Project',
      project: 'projectOne',
      imageLoaded: false,
      images: this.galleryService.getProjectOneImages(),
    });
    this.projects.push({
      name: 'Green Dragon Project',
      project: 'projectTwo',
      imageLoaded: false,
      images: this.galleryService.getProjectTwoImages(),
    });
    this.projects.push({
      name: 'Cornwall Project',
      project: 'projectThree',
      imageLoaded: false,
      images: this.galleryService.getProjectThreeImages(),
    });
    this.projects.push({
      name: 'Dani & Deea Shop Project',
      project: 'projectFour',
      imageLoaded: false,
      images: this.galleryService.getProjectFourImages(),
    });
    this.projects.push({
      name: 'Amurg Restaurant Project',
      project: 'projectFive',
      imageLoaded: false,
      images: this.galleryService.getProjectFiveImages(),
    });
    this.projects.push({
      name: 'Pancroft Project',
      project: 'projectSix',
      imageLoaded: false,
      images: this.galleryService.getProjectSixImages(),
    });
    this.projects.push({
      name: 'Prince George Project',
      project: 'projectSeven',
      imageLoaded: false,
      images: this.galleryService.getProjectSevenImages(),
    });
    this.projects.push({
      name: 'Tauton Project',
      project: 'projectEight',
      imageLoaded: false,
      images: this.galleryService.getProjectEightImages(),
    });
    this.projects.push({
      name: 'Versace Bathroom',
      project: 'projectNine',
      imageLoaded: false,
      images: this.galleryService.getProjectNineImages(),
    });
  }
}

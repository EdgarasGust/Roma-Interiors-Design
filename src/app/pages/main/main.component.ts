import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private scroll: ViewportScroller) {}

  scrollTo() {
    this.scroll.scrollToAnchor('choose-package');
  }
}

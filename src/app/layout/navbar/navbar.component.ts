import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  isCollapsed = true;
  isCollapsedService = true;

  showContainer: boolean = false;
  subscription: Subscription;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private scroll: ViewportScroller,
    private breakpointObsService: BreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.subscription = this.breakpointObserver
      .observe(['(min-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
          this.breakpointObsService.breakpointObserver.next('large');
        } else {
          this.showContainer = false;
          this.breakpointObsService.breakpointObserver.next('mobile');
        }
      });
  }

  onScrollToLarge(section: string) {
    this.scroll.scrollToAnchor(`${section}`);
  }

  onScrollToSmall(section: string) {
    this.scroll.scrollToAnchor(`${section}`);
    this.isCollapsed = true;
    this.isMenuCollapsed = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

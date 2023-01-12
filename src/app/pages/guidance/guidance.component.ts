import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.scss'],
})
export class GuidanceComponent {
  constructor(private router: Router) {}

  choosePackage() {
    this.router.navigate(['/'], { fragment: 'choose-package' });
  }
}

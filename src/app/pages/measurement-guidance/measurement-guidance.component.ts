import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurement-guidance',
  templateUrl: './measurement-guidance.component.html',
  styleUrls: ['./measurement-guidance.component.scss'],
})
export class MeasurementGuidanceComponent {
  constructor(private router: Router) {}

  scrollTo() {
    this.router.navigate(['/'], { fragment: 'choose-package' });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent {
  planSelected: boolean = false;
  service: string = '';

  onPlanSelected(plan: string) {
    this.planSelected = true;
    this.service = plan;
  }
}

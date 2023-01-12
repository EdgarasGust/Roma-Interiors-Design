import { Component } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
})
export class SectionThreeComponent {
  modernMin: boolean = false;
  modernMid: boolean = false;
  industrial: boolean = false;
  rustic: boolean = false;
  french: boolean = false;
  scandinavian: boolean = false;
  nautical: boolean = false;
  farmhouse: boolean = false;
  chosenStyles: string = '';
  formVisible: boolean = false;
  formSent: boolean = false;
  username: string = '';

  onStylePicked() {
    if (this.modernMin) {
      this.chosenStyles += 'Modern & Minimal,';
    }
    if (this.modernMid) {
      this.chosenStyles += 'Modern Mid-Century,';
    }
    if (this.industrial) {
      this.chosenStyles += 'Industrial,';
    }
    if (this.rustic) {
      this.chosenStyles += 'Rustic Bohemian,';
    }
    if (this.french) {
      this.chosenStyles += 'French country,';
    }
    if (this.scandinavian) {
      this.chosenStyles += 'Scandinavian,';
    }
    if (this.nautical) {
      this.chosenStyles += 'Nautical or Navy,';
    }
    if (this.farmhouse) {
      this.chosenStyles += 'Farmhouse Chic,';
    }

    this.formVisible = true;
  }

  onFormSent(event: any) {
    this.formSent = event.submitted;
    this.formVisible = false;
    this.username = event.name;
  }

  close() {
    this.modernMin = false;
    this.modernMid = false;
    this.industrial = false;
    this.rustic = false;
    this.french = false;
    this.scandinavian = false;
    this.nautical = false;
    this.farmhouse = false;
    this.chosenStyles = '';
    this.formVisible = false;
    this.formSent = false;
    this.username = '';
  }
}

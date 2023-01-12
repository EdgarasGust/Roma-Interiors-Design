import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-room-package-details',
  templateUrl: './room-package-details.component.html',
  styleUrls: ['./room-package-details.component.scss'],
})
export class RoomPackageDetailsComponent {
  @Input() service: string = '';
  @Output() backdropState = new EventEmitter<boolean>();
  planChosen: boolean = false;
  formSent: string = '';
  username: string = '';
  errorMsg: string = '';

  close() {
    this.service = '';
    this.username = '';
    this.planChosen = false;
    this.formSent = '';
    this.backdropState.emit(false);
    this.errorMsg = '';
  }

  onPlanSelected() {
    this.planChosen = true;
  }

  onFormSent(formData: any) {
    this.service = '';
    this.planChosen = false;
    this.username = formData.name;
    this.formSent = formData.submitted;
    this.errorMsg = formData.errorMsg;
  }
}

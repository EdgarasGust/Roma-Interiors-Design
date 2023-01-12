import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  formSent: string = '';
  username = '';
  errorMsg: string = '';

  constructor() {}

  onFormSubmitted(formData: any) {
    this.username = formData.name;
    this.formSent = formData.submitted;
    this.errorMsg = formData.errorMsg;
  }
  close() {
    this.username = '';
    this.formSent = '';
  }
}

import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SendEmailService } from 'src/app/http/send-email.service';

@Component({
  selector: 'app-mini-form',
  templateUrl: './mini-form.component.html',
  styleUrls: ['./mini-form.component.scss'],
})
export class MiniFormComponent {
  @ViewChild('f') signupForm: NgForm;
  @Output() formSent = new EventEmitter<any>();
  @Input() service: string = '';
  @Input() chosenStyle: string = '';
  isLoading: boolean = false;
  errorMsg: string = '';

  formDetails = {
    whereFrom: 'mini-form',
    username: '',
    email: '',
    tel: '',
    question: '',
    chosenService: '',
    chosenStyle: '',
  };
  constructor(private router: Router, private sendEmail: SendEmailService) {}

  onSubmit() {
    this.isLoading = true;
    this.formDetails.username = this.signupForm.value.name;
    this.formDetails.email = this.signupForm.value.email;
    this.formDetails.tel = this.signupForm.value.phone;
    this.formDetails.question = this.signupForm.value.message;
    this.formDetails.chosenService = this.service;
    this.formDetails.chosenStyle = this.chosenStyle;
    this.sendEmail.sendFormDetails(this.formDetails).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.formSent.emit({
          name: this.formDetails.username,
          submitted: 'success',
        });
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.message;
        this.formSent.emit({
          name: '',
          submitted: 'error',
          errorMsg: this.errorMsg,
        });
      },
    });

    this.signupForm.reset();
  }
}

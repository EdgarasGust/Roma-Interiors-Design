import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() errorMsg: string = '';
  @Output() closeState = new EventEmitter<any>();

  constructor(private router: Router) {}

  close() {
    this.errorMsg = '';
    this.closeState.emit();
    this.router.navigate(['/']);
  }
}

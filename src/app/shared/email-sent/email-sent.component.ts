import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss'],
})
export class EmailSentComponent {
  @Input() username: string | undefined | null = '';
  @Output() closeState = new EventEmitter<any>();

  constructor(private router: Router) {}
  close() {
    this.username = '';
    this.closeState.emit();
    this.router.navigate(['/']);
  }
}

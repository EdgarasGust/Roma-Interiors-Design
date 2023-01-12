import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Roma Interiors Design';

  constructor(private modalService: NgbModal, private meta: Meta) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Interior Design London, Home Design',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Create Your Dream Interior Online',
    });
  }
}

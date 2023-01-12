import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourExtrasComponent } from './section-four-extras.component';

describe('SectionFourExtrasComponent', () => {
  let component: SectionFourExtrasComponent;
  let fixture: ComponentFixture<SectionFourExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFourExtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFourExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

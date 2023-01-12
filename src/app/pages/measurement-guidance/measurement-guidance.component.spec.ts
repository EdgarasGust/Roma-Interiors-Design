import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurmentGuidanceComponent } from './measurement-guidance.component';

describe('MeasurmentGuidanceComponent', () => {
  let component: MeasurmentGuidanceComponent;
  let fixture: ComponentFixture<MeasurmentGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasurmentGuidanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeasurmentGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

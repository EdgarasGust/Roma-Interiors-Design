import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPackageDetailsComponent } from './room-package-details.component';

describe('RoomPackageDetailsComponent', () => {
  let component: RoomPackageDetailsComponent;
  let fixture: ComponentFixture<RoomPackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPackageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

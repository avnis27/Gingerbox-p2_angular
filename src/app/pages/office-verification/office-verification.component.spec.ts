import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeVerificationComponent } from './office-verification.component';

describe('OfficeVerificationComponent', () => {
  let component: OfficeVerificationComponent;
  let fixture: ComponentFixture<OfficeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

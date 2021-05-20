import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVarificationComponent } from './company-varification.component';

describe('CompanyVarificationComponent', () => {
  let component: CompanyVarificationComponent;
  let fixture: ComponentFixture<CompanyVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyVarificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

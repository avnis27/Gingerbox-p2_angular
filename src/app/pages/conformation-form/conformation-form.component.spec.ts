import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationFormComponent } from './conformation-form.component';

describe('ConformationFormComponent', () => {
  let component: ConformationFormComponent;
  let fixture: ComponentFixture<ConformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

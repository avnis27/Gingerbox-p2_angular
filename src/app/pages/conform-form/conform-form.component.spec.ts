import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformFormComponent } from './conform-form.component';

describe('ConformFormComponent', () => {
  let component: ConformFormComponent;
  let fixture: ComponentFixture<ConformFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

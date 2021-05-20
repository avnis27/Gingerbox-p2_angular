import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingDetailsComponent } from './working-details.component';

describe('WorkingDetailsComponent', () => {
  let component: WorkingDetailsComponent;
  let fixture: ComponentFixture<WorkingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalScheduleComponent } from './external-schedule.component';

describe('ExternalScheduleComponent', () => {
  let component: ExternalScheduleComponent;
  let fixture: ComponentFixture<ExternalScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExternalScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanEditFormComponent } from './participan-edit-form.component';

describe('ParticipanEditFormComponent', () => {
  let component: ParticipanEditFormComponent;
  let fixture: ComponentFixture<ParticipanEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipanEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

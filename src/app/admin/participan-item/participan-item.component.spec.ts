import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanItemComponent } from './participan-item.component';

describe('ParticipanItemComponent', () => {
  let component: ParticipanItemComponent;
  let fixture: ComponentFixture<ParticipanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipanItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

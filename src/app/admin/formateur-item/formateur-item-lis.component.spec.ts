import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurItemLisComponent } from './formateur-item-lis.component';

describe('FormateurItemLisComponent', () => {
  let component: FormateurItemLisComponent;
  let fixture: ComponentFixture<FormateurItemLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurItemLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurItemLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

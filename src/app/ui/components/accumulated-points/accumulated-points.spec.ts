import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatedPoints } from './accumulated-points';

describe('AccumulatedPoints', () => {
  let component: AccumulatedPoints;
  let fixture: ComponentFixture<AccumulatedPoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulatedPoints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulatedPoints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

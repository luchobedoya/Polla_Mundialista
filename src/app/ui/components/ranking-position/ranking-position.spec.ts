import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPosition } from './ranking-position';

describe('RankingPosition', () => {
  let component: RankingPosition;
  let fixture: ComponentFixture<RankingPosition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPosition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPosition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

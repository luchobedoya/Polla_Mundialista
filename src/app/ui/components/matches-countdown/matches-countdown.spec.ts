import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesCountdown } from './matches-countdown';

describe('MatchesCountdown', () => {
  let component: MatchesCountdown;
  let fixture: ComponentFixture<MatchesCountdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesCountdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesCountdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

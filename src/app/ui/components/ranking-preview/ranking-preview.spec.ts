import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPreview } from './ranking-preview';

describe('RankingPreview', () => {
  let component: RankingPreview;
  let fixture: ComponentFixture<RankingPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

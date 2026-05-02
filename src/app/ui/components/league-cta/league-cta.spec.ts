import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCta } from './league-cta';

describe('LeagueCta', () => {
  let component: LeagueCta;
  let fixture: ComponentFixture<LeagueCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

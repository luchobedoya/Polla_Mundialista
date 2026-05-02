import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTips } from './news-tips';

describe('NewsTips', () => {
  let component: NewsTips;
  let fixture: ComponentFixture<NewsTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

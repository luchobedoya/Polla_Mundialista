import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeagues } from './user-leagues';

describe('UserLeagues', () => {
  let component: UserLeagues;
  let fixture: ComponentFixture<UserLeagues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLeagues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLeagues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

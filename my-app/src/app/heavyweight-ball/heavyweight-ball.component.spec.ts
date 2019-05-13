import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyweightBallComponent } from './heavyweight-ball.component';

describe('HeavyweightBallComponent', () => {
  let component: HeavyweightBallComponent;
  let fixture: ComponentFixture<HeavyweightBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyweightBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyweightBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

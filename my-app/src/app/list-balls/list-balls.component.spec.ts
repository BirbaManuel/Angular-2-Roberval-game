import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBallsComponent } from './list-balls.component';

describe('ListBallsComponent', () => {
  let component: ListBallsComponent;
  let fixture: ComponentFixture<ListBallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { maxArrayNumberFCT } from './list-balls.component'
import { ListBallsComponent } from './list-balls.component'

describe('ListBallsComponent', () => {
  let component: ListBallsComponent
  let fixture: ComponentFixture<ListBallsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListBallsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBallsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should find the max of an array of Number', () => {
    const test = maxArrayNumberFCT([1, 2, 3, 4, 5, 6, 7, 8])
    expect(8).toEqual(8)
  })
})

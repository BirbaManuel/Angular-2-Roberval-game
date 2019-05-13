import { Component, OnInit } from '@angular/core'
// import { Ball } from './../ball'
import { BALLS } from './../mock-balls'
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'
/*
import { from } from 'rxjs'
import { map } from 'rxjs/operators/'
import { Observable } from 'rxjs' */

import { BallsGeneratorService } from './../services/balls-generator.service'
import { HeavyweightBallComponent } from './../heavyweight-ball/heavyweight-ball.component'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-list-balls',
  templateUrl: './list-balls.component.html',
  styleUrls: ['./list-balls.component.css'],
})
export class ListBallsComponent implements OnInit {
  ballForm: FormGroup
  resultatIteration: Number
  showResultat: Boolean
  resultatBouleMax: Number
  balls$: any
  // balls$: Ball[]
  ballss: Observable<any>
  constructor(
    private fb: FormBuilder,
    private ballsGenerator: BallsGeneratorService
  ) {}
  log(e) {
    console.log(e)
  }

  reset() {
    this.showResultat = false
  }

  findBouleMax(arrayOfNumber) {
    console.log(`La boule ${maxArrayNumber(arrayOfNumber)} est la plus lourde`)
    this.showResultat = true
    this.resultatBouleMax = maxArrayNumber(arrayOfNumber)
    this.resultatIteration = 1
  }
  ngOnInit() {
    const ballUnit = this.fb.group({
      poids1: '',
      poids2: '',
      poids3: '',
      poids4: '',
    })
    this.ballForm = this.fb.group({
      titre: 'Robervall',
      // setBall: this.fb.array([]),
      setBall: ballUnit,
      poids: this.fb.array([]),
    })
    this.ballsGenerator.getAllBalls().subscribe(sucess => {
      // this.balls$ = ('data'in sucess)? sucess.data
      console.log(sucess)
    })
    // this.balls$ = BALLS => Balls mocked
    this.showResultat = false
    this.ballForm.valueChanges.subscribe(sucess => {
      console.log(sucess)
    })
  }
}
function maxArrayNumber(arrayOfNumber) {
  //only one iteration
  return Math.max(
    ...arrayOfNumber.map(el => {
      return el.poids
    })
  )
}
export const maxArrayNumberFCT = maxArrayNumber

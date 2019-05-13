import { Component, OnInit } from '@angular/core'
import { Ball } from './../ball'
import { BALLS } from './../mock-balls'
/* import { FormControl, FormGroup } from '@angular/forms'
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
  resultatIteration: Number
  showResultat: Boolean
  resultatBouleMax: Number
  balls$: Ball[]
  ballss: Observable<any>
  constructor(private ballsGenerator: BallsGeneratorService) {}
  log(e) {
    console.log(e)
  }
  getAllBalls(): any {
    return this.ballsGenerator.getAllBalls()
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
    this.ballsGenerator.getAllBalls().subscribe(sucess => {
      this.balls$ = sucess.data
    })
    // this.balls$ = BALLS => Balls mocked
    this.showResultat = false
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

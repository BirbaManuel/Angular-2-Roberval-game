import { Component, OnInit } from '@angular/core'
import { Ball } from './../ball'
/* import { FormControl, FormGroup } from '@angular/forms'
import { from } from 'rxjs'
import { map } from 'rxjs/operators/'
import { Observable } from 'rxjs' */

import { BallsGeneratorService } from './../services/balls-generator.service'
import { HeavyweightBallComponent } from './../heavyweight-ball/heavyweight-ball.component'

@Component({
  selector: 'app-list-balls',
  templateUrl: './list-balls.component.html',
  styleUrls: ['./list-balls.component.css'],
})
export class ListBallsComponent implements OnInit {
  // source = from([1, 2, 29, 40, 50, 43, 8, 10])
  // formulaire = new FormControl('')
  // error: String
  /*
    getBalls() {
      return BallsGeneratorService.getAllBalls()
    }
  */
  resultatIteration: Number
  showResultat: Boolean
  balls$: Array<any> //Observable<any>
  resultatBouleMax: Number
  ball: Ball = { id: 1, poids: 10 }
  constructor(private ballsGenerator: BallsGeneratorService) {}
  log(e) {
    console.log(e)
  }
  reset() {
    this.showResultat = false
  }

  findBouleMax(arrayOfNumber) {
    console.log(`La boule ${Math.max(...arrayOfNumber)} est la plus lourde`)
    this.showResultat = true
    this.resultatBouleMax = maxArrayNumber(arrayOfNumber)
    //return Math.max(...arrayOfNumber)
    this.resultatIteration = 1
  }
  ngOnInit() {
    // this.balls = [1, 2, 29, 40, 50, 43, 8, 10]
    // this.balls.pipe(map(val => val + 10))
    /*   .map(res => res.json())
      .subscribe(
        data => (this.balls = data),
        error => (this.error = error.statusText)
      ) */
    // this.ballsGenerator.getAllBalls().subscribe(data => console.log(data))
    this.balls$ = [1, 2, 29, 40, 5, 43, 8, 10]
    this.showResultat = false
    //this.resultatBouleMax = this.findBouleMax(this.balls$)
  }
}
function maxArrayNumber(arrayOfNumber) {
  return Math.max(...arrayOfNumber)
}
export const maxArrayNumberFCT = maxArrayNumber

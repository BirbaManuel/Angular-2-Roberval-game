import { Component, OnInit } from '@angular/core'
import { Ball } from './../ball'
import { BALLS } from './../mock-balls'
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms'

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
  setBallsControl: FormControl
  resultatIteration: Number
  showResultat: Boolean
  resultatBouleMax: Number
  balls$: any
  ballss: Observable<any>
  gamedata: any
  constructor(
    private fb: FormBuilder,
    private ballsGenerator: BallsGeneratorService
  ) {}

  log(e) {
    console.log(e)
  }

  reset() {
    this.showResultat = false
    this.ballForm.reset()
  }

  ngOnInit() {
    //this.gamedata = gameBallsPromise()
    // console.log(this.gamedata)
    this.ballsGenerator.getAllBalls().subscribe(
      sucess => {
        this.balls$ = sucess['data']
        console.log(this.balls$)
        this.ballForm = this.fb.group({
          titre: 'Robervall-game',
          boule0: this.balls$[0]['poids'],
          boule1: this.balls$[1]['poids'],
          boule2: this.balls$[2]['poids'],
          boule3: this.balls$[3]['poids'],
          boule4: this.balls$[4]['poids'],
          boule5: this.balls$[5]['poids'],
          boule6: this.balls$[6]['poids'],
          boule7: this.balls$[7]['poids'],
        })
      },
      error => {
        this.balls$ = BALLS
        console.error(error)
      }
    )
    this.showResultat = false
  }

  async submitHandler() {
    const { titre, ...formValue } = this.ballForm.value
    const values = Object.values(formValue)
    try {
      const result = maxArrayStrictNumber(values)
      console.log(result)
      this.resultatBouleMax = result
    } catch (err) {}
    this.showResultat = true
  }
}

function maxArrayStrictNumber(arrayOfNumber) {
  //only one iteration
  return Math.max(
    ...arrayOfNumber.map(el => {
      return el
    })
  )
}
export const maxArrayNumberFCT = maxArrayStrictNumber

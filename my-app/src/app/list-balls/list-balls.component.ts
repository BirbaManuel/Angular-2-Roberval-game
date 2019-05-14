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
/*
import { from } from 'rxjs'
import { map } from 'rxjs/operators/'
*/

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
    // const ballUnitSchema = this.fb.group({
    //   poids1: '',
    //   poids2: '',
    //   poids3: '',
    //   poids4: '',
    // })
    this.setBallsControl = this.fb.control(
      'setBalls',
      Validators.pattern('^(?:[1-9]|[1-4][0-9]|50)$') // nombre de 0 à 50
    )
    this.ballForm = this.fb.group({
      titre: 'Robervall-game',
      setBalls: this.setBallsControl,
      phones: this.fb.array([]),
    })
    this.ballsGenerator.getAllBalls().subscribe(
      sucess => {
        this.balls$ = sucess['data']
        console.log(sucess)
      },
      error => {
        this.balls$ = BALLS
        console.error(error)
      }
    )
    this.showResultat = false
    this.ballForm.valueChanges.subscribe(sucess => {
      this.log(sucess)
    })
  }
  get phoneForms() {
    return this.ballForm.get('phones') as FormArray
  }
  get setBallsForms() {
    return this.ballForm.get('setBalls')
  }
  addPhone() {
    const phone = this.fb.group({
      poids: [],
    })
    this.phoneForms.push(phone)
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  async submitHandler() {
    const formValue = this.ballForm.value
    try {
      await console.log(formValue)
      // await console.log(formValue)
    } catch (err) {}
  }
}
function maxArrayNumber(arrayOfNumber: Ball[]) {
  //only one iteration
  return Math.max(
    ...arrayOfNumber.map(el => {
      return el.poids
    })
  )
}
export const maxArrayNumberFCT = maxArrayNumber

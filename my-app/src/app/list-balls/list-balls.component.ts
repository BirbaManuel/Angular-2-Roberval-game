import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { map } from 'rxjs/operators/'
import { Observable } from 'rxjs'

import { BallsGeneratorService } from './../services/balls-generator.service'

@Component({
  selector: 'app-list-balls',
  templateUrl: './list-balls.component.html',
  styleUrls: ['./list-balls.component.css'],
})
export class ListBallsComponent implements OnInit {
  // source = from([1, 2, 29, 40, 50, 43, 8, 10])
  balls: Array<Number> //Observable<any>
  // error: String
  constructor(private ballsGenerator: BallsGeneratorService) {}
  /*  showBalls() {
    return BallsGeneratorService.getAllBalls()
  } */

  ngOnInit() {
    // this.balls = [1, 2, 29, 40, 50, 43, 8, 10]
    // this.balls.pipe(map(val => val + 10))
    /*   .map(res => res.json())
      .subscribe(
        data => (this.balls = data),
        error => (this.error = error.statusText)
      ) */
    // this.ballsGenerator.getAllBalls().subscribe(data => console.log(data))
    this.balls = [1, 2, 29, 40, 50, 43, 8, 10]
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class BallsGeneratorService {
  constructor(private http: HttpClient) {}

  getAllBalls() {
    return this.http.get('data/numbers.json')
  }
}

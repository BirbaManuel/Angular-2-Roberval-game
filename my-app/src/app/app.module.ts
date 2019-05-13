import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListBallsComponent } from './list-balls/list-balls.component'

import { BallsGeneratorService } from './services/balls-generator.service'
import { HeavyweightBallComponent } from './heavyweight-ball/heavyweight-ball.component'

@NgModule({
  declarations: [AppComponent, ListBallsComponent, HeavyweightBallComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BallsGeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

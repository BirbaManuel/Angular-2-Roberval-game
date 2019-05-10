import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListBallsComponent } from './list-balls/list-balls.component'

import { BallsGeneratorService } from './services/balls-generator.service'

@NgModule({
  declarations: [AppComponent, ListBallsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BallsGeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

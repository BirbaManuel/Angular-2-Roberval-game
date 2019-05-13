import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ListBallsComponent } from './list-balls/list-balls.component'

import { BallsGeneratorService } from './services/balls-generator.service'
import { HeavyweightBallComponent } from './heavyweight-ball/heavyweight-ball.component'

@NgModule({
  declarations: [AppComponent, ListBallsComponent, HeavyweightBallComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BallsGeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

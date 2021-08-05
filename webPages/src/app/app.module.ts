import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { Week02aComponent } from './week02/week02a/week02a.component';
import { CheckboxLinkComponent } from './shared/checkbox-link/checkbox-link.component';
import { Week04aComponent } from './week04/week04a/week04a.component';
import { Week01aComponent } from './week01/week01a/week01a.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    KeyboardComponent,
    NavComponent,
    Week02aComponent,
    CheckboxLinkComponent,
    Week04aComponent,
    Week01aComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

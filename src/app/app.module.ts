import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, InputButtonUnitComponent ],
  declarations: [ AppComponent,InputButtonUnitComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

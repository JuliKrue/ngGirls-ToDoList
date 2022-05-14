import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,InputButtonUnitComponent, TodoItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

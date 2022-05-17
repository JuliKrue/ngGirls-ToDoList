import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

@NgModule({
  imports:      [ BrowserModule ],
  providers: [],
  declarations: [ AppComponent,InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

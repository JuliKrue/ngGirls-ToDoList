import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
 /**Verweist auf verfügbare Objekte vom Typ TodoItem, um diese in der component Klasse und template nutzen zu können */
  @Input() item: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
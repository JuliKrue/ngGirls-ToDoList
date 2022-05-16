import { Component, OnInit, VERSION } from '@angular/core';
/**Interface wird importiert */
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `

    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})

export class ListManagerComponent implements OnInit {
  
  /**Typ Zuordnung zu einer class property mit : und nicht mit = */
  /**Verweis auf das Interface, Array mit zugehörigen Objekten */
  todoList: TodoItem [] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
/**addItem Methode wird implementiert, Info kommt von app-input-button-unit */
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }

}


import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input"
            #inputElementRef
            [value]="title"
            (keyup.enter)="submitValue=$any($event.target).value">
            
    <button class="btn" 
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  /**Definiert Output der Komponente für andere Klassen */
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
/**Rename ChangeTitle zu submitValue, muss auch im template angepasst werden */
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  
}
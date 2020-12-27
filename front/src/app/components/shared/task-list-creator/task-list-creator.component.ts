import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-creator',
  templateUrl: './task-list-creator.component.html',
  styleUrls: ['./task-list-creator.component.css']
})
export class TaskListCreatorComponent implements OnInit {
  public value: string;
  @Output() listName: EventEmitter<string>;

  constructor() {
    this.listName = new EventEmitter();
  }

  ngOnInit(): void { }

  public addNewList(): void {
    if ( this.value !== '' && this.value !== undefined ) {
      this.listName.emit(this.value);
      this.value = '';
    }
  }

}

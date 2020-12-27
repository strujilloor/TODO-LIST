import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskList } from 'src/app/models/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() list: TaskList;
  @Output() taskToCreate: EventEmitter<Task>;
  @Output() taskToUpdate: EventEmitter<Task>;
  @Output() taskIdToDelete: EventEmitter<number>;
  @Output() taskToCheck: EventEmitter<Task>;
  @Output() listIdToDelete: EventEmitter<string>;
  public selectedTask: Task;

  constructor() {
    this.taskToCreate = new EventEmitter();
    this.taskToUpdate = new EventEmitter();
    this.taskIdToDelete = new EventEmitter();
    this.taskToCheck = new EventEmitter();
    this.listIdToDelete = new EventEmitter();
  }
  
  ngOnInit(): void {
    this.resetTask();
  }

  public resetTask() {
    this.selectedTask = {
      name: '',
      completed: false,
      listId: this.list.id,
      listName: this.list.name
    }
  }

  public addTask() {
    if ( this.selectedTask.name !== '' && this.selectedTask.name !== undefined ) {
      this.taskToCreate.emit( this.selectedTask );
      this.resetTask();
    }
  }

  public editTask( task: Task ) {
    this.selectedTask = task;
  }

  public updateTask() {
    this.taskToUpdate.emit( this.selectedTask );
    this.resetTask();
  }

  public deleteTask( taskId: number ) {
    this.taskIdToDelete.emit( taskId );
  }

  public checkTask( task: Task ) {
    this.taskToCheck.emit( task );
  }

  public deleteList() {
    this.listIdToDelete.emit( this.list.id );
  }

}

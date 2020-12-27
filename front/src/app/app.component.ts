import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from './models/task-list';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.getItems();
  }

  public getItems(): void {
    // Mapping response to Array<TaskList>
    this.taskService
      .getLists()
      .subscribe(
        lists => {
          this.taskService.items = lists;
          this.taskService
            .getTasks()
            .subscribe(
              tasks => {
                this.taskService.items.forEach(
                  list => {
                    list.tasks = [];
                    tasks.forEach((task) => {
                      if ( list.id === task.listId ) {
                        list.tasks.push( task );
                      }
                    })
                  }
                );
              }
            );
        }
      );
  }

  public addNewList( value: string ): void {
    const task: Task = {
      name: 'Tarea',
      completed: false,
      listId: uuidv4(),
      listName: value
    }
    this.taskService
      .saveTask( task )
      .subscribe(( data: Task ) => {
        console.log('response: ', data);
        this.getItems();
      });
  }

  public addTask( task: Task ) {
    this.taskService
      .saveTask( task )
      .subscribe(( data: Task ) => {
        console.log('response: ', data);
        this.getItems();
      });
  }

  public updateTask( task: Task ) {
    this.taskService
      .updateTask( task )
      .subscribe(( data: Task ) => {
        console.log('response: ', data);
        this.getItems();
      });
  }

  public deleteTask( taskId: number ) {
    this.taskService
      .deleteTask( taskId )
      .subscribe( _ => {
        this.getItems();
      });
  }

  public checkTask( task: Task) {
    task.completed = !task.completed
    this.updateTask( task );
  }

  public deleteList( listId: string ) {
    this.taskService
      .deleteList( listId )
      .subscribe( _ => {
        this.getItems();
      });
  }
}

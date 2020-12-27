import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TaskList } from '../models/task-list';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL_API = 'http://localhost:8080/api';
  public items: TaskList[];

  constructor(private http: HttpClient) {
    console.log('Task Service Ready!')
  }

  getLists(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${ this.URL_API }/lists`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${ this.URL_API }/tasks`);
  }

  saveTask( task: Task ): Observable<Task> {
    return this.http.post<Task>(`${ this.URL_API }/tasks`, task);
  }

  updateTask( task: Task ): Observable<Task> {
    return this.http.put<Task>(`${ this.URL_API }/tasks`, task);
  }
  
  deleteTask( id: number ): Observable<{}> {
    const url = `${ this.URL_API }/tasks/${ id }`;
    return this.http.delete(url);
  }

  deleteList( id: string ): Observable<{}> {
    const url = `${ this.URL_API }/lists/${ id }`;
    return this.http.delete(url);
  }
}

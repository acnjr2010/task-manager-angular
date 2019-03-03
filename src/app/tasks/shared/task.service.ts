import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService{
  public tasksUrl = "api/tasks";
  public constructor(private http: Http){}
  public getTasks(): Observable<Task[]>{
    return this.http.get(this.tasksUrl)
      .map((response: Response) => response.json().data as Task[])

  }

  public getImportantTasks(): Observable<any>{
    return this.getTasks()
      .map(tasks => tasks.slice(0, 3))
  }

  public getTask(id: number): Observable<Task>{
    let url = '${this.tasksUrl}/${id}';

    return this.http.get(url)
      .map((response: Response) => response.json().data as Task)
  }
}
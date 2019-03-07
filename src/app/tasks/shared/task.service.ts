import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class TaskService{
  public tasksUrl = "api/tasks";
  
  public constructor(private http: Http){}
  public getTasks(): Observable<Task[]>{
    return this.http.get(this.tasksUrl)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task[])

  }

  public getImportantTasks(): Observable<any>{
    return this.getTasks()
      .catch(this.handleErrors)
      .map(tasks => tasks.slice(0, 3))
  }

  public getTask(id: number): Observable<Task>{
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task)
  }

  private handleErrors(error: Response){
    console.log("DETALHE DO ERRO " + error)
    return Observable.throw(error);
  }
}
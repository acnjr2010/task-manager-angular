import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TaskComponent implements OnInit{
  public tasks: Array<Task>;
  public newTask: Task;

  public constructor(private taskService: TaskService){ 
    this.newTask = new Task(null, '');
  }

  public ngOnInit(){
    this.taskService.getAll()
      .subscribe(
        tasks => this.tasks = tasks.sort((a, b) => b.id - a.id),
        error => alert("Ocorreu um erro no servidor, tente mais tarde")
      )            
  }

  public createTask(){
    this.newTask.title = this.newTask.title.trim();

    if(!this.newTask.title){
      alert('A tarefa deve ter um título.');
    }else{
      this.taskService.create(this.newTask)
        .subscribe(
          (task) => {
            this.tasks.unshift(task);
            this.newTask = new Task(null, '');
          },
          () => alert("Ocorreu um erro no servidor, tente novamente mais tarde...")
        )
    }
  }

  public deleteTask(task: Task){
    if( confirm(`Deseja realmente apagar a tarefa "${task.title}"?`)){
      this.taskService.delete(task.id)
      .subscribe(
        () => this.tasks = this.tasks.filter(t => t.id !== task.id),
        () => alert("Ocorreu um erro no servidor, tente novamente mais tarde...")
      )
    }
  }

  
}
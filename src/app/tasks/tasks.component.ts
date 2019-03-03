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
    public selectedTask: Task;

    public constructor(private taskService: TaskService){ }

    public ngOnInit(){
        this.taskService.getTasks()
            .then((tasks) => this.tasks = tasks)
            .catch((error_message) => alert(error_message));
    }

    public onSelect(task: Task): void {
        this.selectedTask = task;
    }
}
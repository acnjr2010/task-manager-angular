import { Component } from '@angular/core';
import { TaskmanagerFrontendPage } from '../../e2e/app.po';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciador de Tarefas';

  task: Task = {
    id: 22,
    title: 'Enviar orçamento para cliente X'
  }

  task2: Task = new Task(23, 'Enviar orçamento para cliente Y');
}

export class Task{
  public id: number;
  public title: string;
  
  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

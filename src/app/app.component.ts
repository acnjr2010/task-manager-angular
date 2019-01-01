import { Component } from '@angular/core';
import { TaskmanagerFrontendPage } from '../../e2e/app.po';
import { stringify } from '@angular/core/src/util';

import { Task } from './tasks/shared/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciador de Tarefas';
}


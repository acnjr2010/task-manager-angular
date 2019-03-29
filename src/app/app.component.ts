import { Component } from '@angular/core';
import { TaskmanagerFrontendPage } from '../../e2e/app.po';
import { stringify } from '@angular/core/src/util';

import { Task } from './tasks/shared/task.model';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  public constructor(private tokenService: TokenService){
    this.tokenService.init({
      apiBase: 'http://localhost:3000',
     // apiBase: 'https://taskmanager-api-junior.herokuapp.com',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    })
  }
}


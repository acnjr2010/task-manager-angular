import { Component } from '@angular/core';
import { TaskmanagerFrontendPage } from '../../e2e/app.po';
import { stringify } from '@angular/core/src/util';

import { Task } from './tasks/shared/task.model';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  public constructor(private tokenService: Angular2TokenService){
    this.tokenService.init({
      apiBase: 'http://localhost:3000'
    })
  }
}


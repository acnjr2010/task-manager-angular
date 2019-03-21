import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
  public reactiveTaskForm: FormGroup;
  public task: Task;

  public taskDoneOptions: Array<any> = [
    { value: false, text: "Pendente" },
    { value: true, text: "Feito" }
  ]

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.reactiveTaskForm = this.formBuilder.group({
      title: [null],
      deadline: [null],
      done: [null],
      description: [null],
      user: this.formBuilder.group({
        name: ['Antonio Carlos'],
        email: ['nog.junior84@gmail.com']
      })
    })
  }

  public ngOnInit(){
    this.task = new Task(null, null);

    this.route.params
      .switchMap((params: Params) => this.taskService.getById(+params['id']))
      .subscribe(
        task => this.setTask(task),
        error => alert("Ocorreu um erro no servidor, tente novamente mais tarde...")
      )
  }

  public ngAfterViewInit(){
  // Exemplo utilizando o REACTIVE FORM
  $('#deadline').datetimepicker({
    'sideBySide': true,
    'locale': 'pt-br'
  }).on('dp.change', () => this.reactiveTaskForm.get('deadline').setValue($('#deadline').val())); 


  // Exemplo utilizando TDF
  /*     
    $('#deadline').datetimepicker({
      'sideBySide': true,
      'locale': 'pt-br'
    }).on('dp.change', () => this.task.deadline = $('#deadline').val()); 
  */
  }

  public goBack(){
    this.location.back();
  }

  public updateTask(){
    this.taskService.update(this.task)
      .subscribe(
        () => alert("Tarefa atualizada com sucesso"),
        error => alert("Ocorreu um erro no servidor, tente novamente mais tarde...")
      );
  }

  public setTask(task: Task): void {
    this.task = task;
    this.reactiveTaskForm.patchValue(task);
    // setValue => Aceita os campos do task igual ao objeto

    /*     let formModel = {
      title: task.title || null,
      description: task.description || null,
      done: task.done || null,
      deadline: task.deadline || null
    }

    this.reactiveTaskForm.setValue(formModel); */


    // patchValue => Aceita os valores que você passar sem a obrigação de ter todos os campos

    /*     let formModel = {
      title: task.title || null
    }

    this.reactiveTaskForm.patchValue(formModel); */
  }
}
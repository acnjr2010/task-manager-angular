import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { FormUtils } from '../../shared/form.utils';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
  public form: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any>;
  public formUtils: FormUtils;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.taskDoneOptions = [
      { value: false, text: "Pendente" },
      { value: true, text: "Feito" }
    ]

    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null]//,
      /* user: this.formBuilder.group({
        name: ['Antonio Carlos'],
        email: ['nog.junior84@gmail.com']
      }) */
    })

    this.formUtils = new FormUtils(this.form);
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
  }).on('dp.change', () => this.form.get('deadline').setValue($('#deadline').val())); 


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
    this.task.title = this.form.get('title').value;
    this.task.deadline = this.form.get('deadline').value;
    this.task.done = this.form.get('done').value;
    this.task.description = this.form.get('description').value;

    this.taskService.update(this.task)
      .subscribe(
        () => alert("Tarefa atualizada com sucesso"),
        error => alert("Ocorreu um erro no servidor, tente novamente mais tarde...")
      );
  }

  public setTask(task: Task): void {
    this.task = task;
    this.form.patchValue(task);
    // setValue => Aceita os campos do task igual ao objeto

    /*     let formModel = {
      title: task.title || null,
      description: task.description || null,
      done: task.done || null,
      deadline: task.deadline || null
    }

    this.form.setValue(formModel); */


    // patchValue => Aceita os valores que você passar sem a obrigação de ter todos os campos

    /*     let formModel = {
      title: task.title || null
    }

    this.form.patchValue(formModel); */
  }
}
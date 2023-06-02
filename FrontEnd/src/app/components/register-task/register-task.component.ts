
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonalTask } from 'src/app/models/personal-task';
import { WorkTask } from 'src/app/models/work-task';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css'],
})


export class RegisterTaskComponent {

  seleccion: string;
  imprimirSeleccion(){
    console.log(this.seleccion);
  }

  selectedOption: string = 'PERSONAL';

  personalTask: PersonalTask = new PersonalTask();
  workTask: WorkTask = new WorkTask();

  statusValue: string;
  categoryValue: string;
  projectValue: string;
  statusMappedValue: string;
  categoryMappedValue: string;

  task: Task = new Task;


  allowedStatusValues: Record<string, string> = {
    'Pendiente': 'PENDING',
    'En proceso': 'IN_PROGRESS',
    'Completada': 'COMPLETED'
  };

  allowedCategoryValues: Record<string, string> = {
    'Educación': 'EDUCATION',
    'Salud': 'HEALTH',
    'Entretenimiento': 'ENTERTAINMENT',
    'Familia': 'FAMILY',
    'Viajes': 'TRAVEL',
    'Compras': 'SHOPPING',
    'Doméstica': 'HOUSEHOLD',
    'Otro': 'OTHER'
  };
  httpClient: any;

  constructor(private http: HttpClient, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.selectedOption = "PERSONAL";
  }

  registerPersonalTask() {
    console.log(this.personalTask);
    this.taskService.saveTask(this.personalTask)
      .subscribe(
        {
          next: res => {
            console.log(res);
          },
          error: err => {
            console.log(err);
          }
        });
    this.goToTaskList();
  }

  registerWorkTask() {
    this.mapeoWorkTask();
    this.taskService.saveTask(this.workTask)
      .subscribe(
        {
          next: res => {
            console.log(res);
          },
          error: err => {
            console.log(err);
          }
        });
    this.goToTaskList();
  }

  goToTaskList() {
    this.router.navigate(['']);
  }

  onSubmitPersonal() {
    this.registerPersonalTask();
  }

  onSubmitWork() {
    this.registerWorkTask();
  }


  mapeoPersonalTask() {
    if (this.allowedStatusValues.hasOwnProperty(this.statusValue) && this.allowedCategoryValues.hasOwnProperty(this.categoryValue)) {

      this.statusMappedValue = this.allowedStatusValues[this.statusValue];
      this.personalTask.status = this.statusMappedValue;

      this.categoryMappedValue = this.allowedCategoryValues[this.categoryValue];
      this.personalTask.category = this.categoryMappedValue;
    }
  }

  mapeoWorkTask() {
    if (this.allowedStatusValues.hasOwnProperty(this.statusValue)) {

      this.statusMappedValue = this.allowedStatusValues[this.statusValue];
      this.workTask.status = this.statusMappedValue;
    }

  }
}





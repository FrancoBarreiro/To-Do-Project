import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { PersonalTask } from 'src/app/models/personal-task';
import { WorkTask } from 'src/app/models/work-task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

  selectedOption: string;
  personalTask: PersonalTask = new PersonalTask();
  workTask: WorkTask = new WorkTask();
  statusValue: string;
  categoryValue: string;
  projectValue: string;
  statusMappedValue: string;
  categoryMappedValue: string;
  task: Task = new Task;

  id: Number;
  personalTaskFound: PersonalTask = new PersonalTask;
  workTaskFound: WorkTask = new WorkTask;

  label: string;

  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }




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

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(taskFound => {
      if (taskFound.reference === 'PERSONAL') {
        this.personalTaskFound = taskFound;
        this.personalTaskFound.status = this.statusToEstado(this.personalTaskFound.status);
        this.personalTaskFound.category = this.categoryToCategoria(this.personalTaskFound.category);
      } else {
        this.workTaskFound = taskFound;
        this.workTaskFound.status = this.statusToEstado(this.workTaskFound.status);
      }
    }, error => console.log(error));
  }

  statusToEstado(status: string): string {
    switch (status) {
      case 'PENDING':
        return status = "Pendiente";
      case 'IN_PROGRESS':
        return status = "En proceso";
      case 'COMPLETED':
        return status = "Completada";
    }
    return "";
  }

  estadoToStatus(status: string): string {
    switch (status) {
      case 'Pendiente':
        return status = "PENDING";
      case 'En proceso':
        return status = "IN_PROGRESS";
      case 'Completada':
        return status = "COMPLETED";
    }
    return "";
  }

  categoryToCategoria(category: string): string {
    switch (category) {
      case 'EDUCATION':
        return category = "Educación";
      case 'HEALTH':
        return category = "Salud";
      case 'ENTERTAINMENT':
        return category = "Entretenimiento";
      case 'FAMILY':
        return category = "Familia";
      case 'TRAVEL':
        return category = "Viajes";
      case 'SHOPPING':
        return category = "Compras";
      case 'HOUSEHOLD':
        return category = "Doméstica";
      case 'OTHER':
        return category = "Otro";
    }
    return "";
  }

  categoriaToCategory(categoria: string): string {
    switch (categoria) {
      case 'Educación':
        return categoria = "EDUCATION";
      case 'Salud':
        return categoria = "HEALTH";
      case 'Entretenimiento':
        return categoria = "ENTERTAINMENT";
      case 'Familia':
        return categoria = "FAMILY";
      case 'Viajes':
        return categoria = "TRAVEL";
      case 'Compras':
        return categoria = "SHOPPING";
      case 'Doméstica':
        return categoria = "HOUSEHOLD";
      case 'Otro':
        return categoria = "OTHER";
    }
    return "";
  }

  updatePersonalTask() {
    this.personalTaskFound.category = this.categoriaToCategory(this.personalTaskFound.category);
    this.personalTaskFound.status = this.estadoToStatus(this.personalTaskFound.status);
    this.taskService.updateTask(this.id, this.personalTaskFound)
      .subscribe(
        {
          next: res => {
            this.router.navigate(['']);
            console.log(res);
          },
          error: err => {
            console.log(err);
          }
        });
  }

  updateWorkTask() {
    this.workTaskFound.status = this.estadoToStatus(this.workTaskFound.status);
    this.taskService.updateTask(this.id, this.workTaskFound)
      .subscribe(
        {
          next: res => {
            console.log(res);
            this.router.navigate(['']);
          },
          error: err => {
            console.log(err);
          }
        });
  }

  goToTaskList() {
    this.router.navigate(['']);
  }

  onSubmitPersonal() {
    this.updatePersonalTask();
  }

  onSubmitWork() {
    this.updateWorkTask();
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





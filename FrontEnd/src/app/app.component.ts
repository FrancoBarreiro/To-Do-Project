import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Gestión de Tareas';

  taskForm: FormGroup;
  
  
  constructor(
    public fb: FormBuilder,
    public taskService: TaskService){}
  
  ngOnInit(): void {
    this.taskForm=this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      taskType: ['', Validators.required],
    });
  }
  
}

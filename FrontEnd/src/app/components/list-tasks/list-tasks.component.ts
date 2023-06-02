import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];
  task: Task;

  constructor(private taskService: TaskService, private router:Router) { };

  ngOnInit(): void {
    this.getTasks();
  }
  private getTasks() {
    this.taskService.getListTasks().subscribe(taskFromBackend => {
      this.tasks = taskFromBackend;
    });
  }

  public updateTask(id:Number){
    this.router.navigate(['editar-tarea',id]);
  }

  public deleteTask(id:Number){
    this.taskService.deleteTask(id).subscribe(
      res =>{this.ngOnInit();},
      err =>console.log(err)  
    );
  }

}





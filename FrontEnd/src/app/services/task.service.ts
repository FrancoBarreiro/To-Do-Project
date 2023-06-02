import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { PersonalTask } from '../models/personal-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Esta URL obtiene el listado de todas las tasks en el backend
  private URL="http://localhost:8080/tasks";

  constructor(private httpClient : HttpClient) { }

  //Este metodo retorna todas las Tasks
  public getListTasks():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  per:string = "personal";
  //Este metodo es para registrar una tarea
  public saveTask(task:Task):Observable<any>{
    return this.httpClient.post(`${this.URL}`,task);
  }

  public updateTask(id:Number,task:Task):Observable<any>{
    return this.httpClient.put(`${this.URL}`,task);
  }
  

  public getTaskById(id:Number):Observable<any>{
    return this.httpClient.get(`${this.URL}/${id}`);
  }

  public deleteTask(id:Number):Observable<any>{
    return this.httpClient.delete(this.URL+'/'+id)
  }

} 

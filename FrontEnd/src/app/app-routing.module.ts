import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { RegisterTaskComponent } from './components/register-task/register-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';


const routes: Routes = [
  {path : 'tareas', component:ListTasksComponent},
  {path : '',redirectTo:'tareas',pathMatch:'full'},
  {path : 'agregar-tarea', component:RegisterTaskComponent},
  {path : 'editar-tarea/:id', component:UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

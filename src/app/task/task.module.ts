import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskToDoComponent } from './components/list-task-to-do/list-task-to-do.component';
import { TaskCompleteComponent } from './components/task-complete/task-complete.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTaskComponent,
    ListTaskToDoComponent,
    TaskCompleteComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class TaskModule { }

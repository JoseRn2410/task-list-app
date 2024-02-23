import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor ( private taskService: TaskService ) {}

  get tasks(): Task[] {
    return [...this.taskService.tasks]
  }

  get taskListComplete(): Task[] {
    return [...this.taskService.taskListComplete]
  }

  onNewTask( task: Task):void{
    this.taskService.addTask(task)
  }

  onNewTaskComplete(task:Task):void{
    this.taskService.completeTask(task)
  }

  onDeleteTask(task:Task):void {
    this.taskService.deleteTask(task)
  }

  onPendingTask(task:Task):void {
    this.taskService.pendingTask(task)
  }
}

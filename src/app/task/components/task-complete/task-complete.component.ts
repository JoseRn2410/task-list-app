import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-complete',
  templateUrl: './task-complete.component.html',
  styleUrl: './task-complete.component.css'
})
export class TaskCompleteComponent {

  @Input()
  public taskListComplete: Task[] = []

  @Output() public onPendingTasks: EventEmitter<Task> = new EventEmitter()

  emitPendingTask(id?:string):void {
    if(id === "") return
    const pendingTask: Task[] = this.taskListComplete.filter(task => task.id === id);
    this.onPendingTasks.emit(...pendingTask);
  }
}

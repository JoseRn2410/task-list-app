import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

 @Output()
 public onNewTasks: EventEmitter<Task> = new EventEmitter();

 public task :Task = {
  description: ""
 };

 emitTasks(): void {

  if(this.task.description.length === 0 ) return

  this.onNewTasks.emit(this.task)

  this.task = { description:"" }

 }


}

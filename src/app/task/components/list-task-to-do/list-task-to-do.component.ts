import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'list-task-to-do',
  templateUrl: './list-task-to-do.component.html',
  styleUrl: './list-task-to-do.component.css'
})
export class ListTaskToDoComponent {

  @Input()
  public taskList: Task[] = []

 
  

  @Output() public onNewTasksComplete: EventEmitter<Task> = new EventEmitter();
@Output() public onDeleteTasks: EventEmitter<Task> = new EventEmitter();

emitTaskEvent(id: string | undefined, eventEmitter: EventEmitter<Task>): void {
    if (!id || id.trim() === "") return;

    const task = this.taskList.find(task => task.id === id);

    if (task) {
        eventEmitter.emit(task);
    }
}

emitCompleteTask(id?: string): void {
    this.emitTaskEvent(id, this.onNewTasksComplete);
}

emitDeleteTask(id?: string): void {
    this.emitTaskEvent(id, this.onDeleteTasks);
}

}

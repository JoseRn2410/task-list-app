import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public tasks: Task[] = []
  public taskListComplete: Task[] = []

  addTask(task:Task):void {
  const newTask:Task = {id: uuid(), ...task} 
  this.tasks.push(newTask);
  console.log(this.tasks);
  
 }

 completeTask(task:Task):void {

  const index = this.tasks.findIndex(t => t.id === task.id);

  const completeTask:Task = { id: task.id, description: task.description } 
  this.taskListComplete.push(completeTask);
  this.tasks.splice(index, 1)
  
 }

 deleteTask(task:Task):void {
  const index = this.tasks.findIndex(t => t.id === task.id);
  this.tasks.splice(index, 1)
 }

 pendingTask(task:Task):void {
  const index = this.tasks.findIndex(t => t.id === task.id);

  const pendingTask:Task = { id: task.id, description: task.description } 
  this.tasks.push(pendingTask);
  this.taskListComplete.splice(index, 1)
 }



}

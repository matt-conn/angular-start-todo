import {Component} from '@angular/core';
import {TodoForm} from './ui/todo-form/todo-form';
import {ToDo} from '../shared/interfaces/todo';

@Component({
	selector: 'app-home',
	template: `
		<h2>Add a To Do</h2>
		<app-todo-form (todoSubmitted)="createTodo($event)"/>
	`,
	imports: [
		TodoForm
	],
})
export default class Home {
	createTodo(todo: ToDo) {
		console.log(todo);
	}
}

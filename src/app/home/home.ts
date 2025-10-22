import { Component, inject } from '@angular/core';
import { TodoForm } from './ui/todo-form';
import { ToDo } from '../shared/interfaces/todo';
import { TodoStore } from '../shared/data-access/todo-store';
import { TodoList } from './ui/todo-list';

@Component({
	selector: 'app-home',
	template: `
		<h2>Add a To Do</h2>
		<app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
		<app-todo-list [todos]="todoService.todos()" />
	`,
	imports: [TodoForm, TodoList],
})
export default class Home {
	todoService = inject(TodoStore);

	createTodo(todo: ToDo) {
		console.log(todo);
	}
}

import { Injectable, signal } from '@angular/core';
import { CreateToDo, ToDo } from '../interfaces/todo';

@Injectable({
	providedIn: 'root',
})
export class TodoStore {
	// private signal
	#todos = signal<ToDo[]>([]);

	// public readonly
	todos = this.#todos.asReadonly();

	addTodo(todo: CreateToDo): void {
		this.#todos.update((todos) => [...todos, { ...todo, id: Date.now().toString() }]);
	}
}

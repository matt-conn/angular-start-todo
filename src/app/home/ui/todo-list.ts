import { Component, input } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-todo-list',
	imports: [RouterLink],
	template: `
		<ul>
			@for (todo of todos(); track todo.id) {
			<li>
				<a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
			</li>
			} @empty {
			<li>You've got nothing to do!</li>
			}
		</ul>
	`,
	styles: [
		`
			ul {
				margin: 0;
				padding: 1rem;
			}
		`,
	],
})
export class TodoList {
	todos = input.required<ToDo[]>();
}

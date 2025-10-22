import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoStore } from '../shared/data-access/todo-store';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-detail',
	template: `
		<a routerLink="/">HOME</a>
		@if (todo(); as todo) {
		<h2>{{ todo.title }}</h2>
		<p>{{ todo.description }}</p>
		} @else {
		<p>Could not find todo item.</p>
		}
	`,
	imports: [RouterLink],
})
export default class DetailComponent {
	private route = inject(ActivatedRoute);
	private todoService = inject(TodoStore);

	private paramMap = toSignal(this.route.paramMap);

	todo = computed(() =>
		this.todoService.todos().find((todo) => todo.id === this.paramMap()?.get('id'))
	);
}

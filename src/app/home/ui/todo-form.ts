import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateToDo } from '../../shared/interfaces/todo';

@Component({
	selector: 'app-todo-form',
	imports: [ReactiveFormsModule],
	template: `
		<form
			[formGroup]="todoForm"
			(ngSubmit)="this.todoSubmitted.emit(this.todoForm.getRawValue())"
		>
			<input type="text" formControlName="title" placeholder="Title..." />
			<input type="text" formControlName="description" placeholder="Description..." />
			<button type="submit" [disabled]="!todoForm.valid">Add To Do</button>
		</form>
	`,
	styles: ``,
})
export class TodoForm {
	private formBuilder = inject(FormBuilder);

	todoSubmitted = output<CreateToDo>();

	todoForm = this.formBuilder.nonNullable.group({
		title: ['', Validators.required],
		description: [''],
	});
}

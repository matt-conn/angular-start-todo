import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
	selector: 'app-root',
	template: `
		<h1>{{ title() }}</h1>
		<router-outlet/>
	`,
	imports: [RouterOutlet],
})
export class App {
	protected readonly title = signal('Angular Start - To Do');
}

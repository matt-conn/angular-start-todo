import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: 'home', loadComponent: () => import('./home/home') },
	{ path: 'detail/:id', loadComponent: () => import('./detail/detail') },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

export interface ToDo {
	id: string;
	title: string;
	description: string;
}

export type CreateToDo = Omit<ToDo, 'id'>;

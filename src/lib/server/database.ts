import type { Todo } from '$lib/types';

/**
 * TODO persist in database
 */
let todos: Todo[] = [];

export const getTodos = () => {
	return todos;
};

export const createTodo = ({ text }: { text: string }) => {
	const id = `${Date.now()}`; // TODO replace with the UUID from the database

	todos.push({
		id,
		createdAt: new Date(),
		text,
		done: false
	});
};

export const editTodo = ({ id, text }: { id: string; text: string }) => {
	todos = todos.map((todo) => {
		if (todo.id === id) {
			todo.text = String(text);
		}
		return todo;
	});
};

export const toggleTodo = ({ id }: { id: string }) => {
	todos = todos.map((todo) => {
		if (todo.id === id) {
			todo.done = !todo.done;
		}
		return todo;
	});
};

export const deleteTodo = ({ id }: { id: string }) => {
	todos = todos.filter((todo) => todo.id !== id);
};

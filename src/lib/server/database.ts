import type { Todo } from '$lib/types';

/**
 * TODO persist in database
 */
let todos: Todo[] = [];

export const getTodos = () => {
	return todos;
};

export const createTodo = ({ description }: { description: string }) => {
	const id = `${Date.now()}`; // TODO replace with the UUID from the database

	todos.push({
		id,
		createdAt: new Date(),
		description,
		done: false
	});

	return { id };
};

export const editTodo = ({
	id,
	description,
	done
}: {
	id: string;
	description: FormDataEntryValue | null;
	done: FormDataEntryValue | null;
}) => {
	todos = todos.map((todo) => {
		if (todo.id === id) {
			if (description) {
				todo.description = String(description);
			} else {
				todo.done = !!done;
			}
		}
		return todo;
	});
};

export const deleteTodo = (id: string) => {
	todos = todos.filter((todo) => todo.id !== id);
};

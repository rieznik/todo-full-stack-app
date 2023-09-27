import type { RequestHandler } from '@sveltejs/kit';
import type { Todo } from '$lib/types';
import { json } from '@sveltejs/kit';

/**
 * TODO persist in database
 */
const todos: Todo[] = [];

export const GET: RequestHandler = () => {
	return json(todos);
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const description = String(data.get('description'));

	todos.push({
		createdAt: new Date(),
		description,
		done: false
	});

	return json(description, {
		status: 303,
		headers: {
			location: '/'
		}
	});
};

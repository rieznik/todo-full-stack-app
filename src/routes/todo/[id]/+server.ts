import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import * as database from '$lib/server/database';

export const DELETE: RequestHandler = async ({ params }) => {
	const id = String(params.id);

	await database.deleteTodo(id);

	return json({ success: true });
};

export const POST: RequestHandler = async ({ params, request }) => {
	const id = String(params.id);
	const data = await request.formData();
	const description = data.get('description');
	const done = data.get('done');

	await database.editTodo({ id, description, done });

	return json(
		{ success: true },
		{
			status: 303,
			headers: {
				location: '/'
			}
		}
	);
};

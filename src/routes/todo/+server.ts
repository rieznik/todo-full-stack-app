import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import * as database from '$lib/server/database';

export const GET: RequestHandler = () => {
	return json(database.getTodos());
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const description = String(data.get('description'));

	const { id } = await database.createTodo({
		description
	});

	return json(
		{ id },
		{
			status: 303,
			headers: {
				location: '/'
			}
		}
	);
};

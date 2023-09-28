import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import * as database from '$lib/server/database';

export const DELETE: RequestHandler = async ({ params }) => {
	const id = String(params.id);

	await database.deleteTodo(id);

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

import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

import {
	createUser,
	getTodos,
	createTodo,
	editTodo,
	toggleTodo,
	deleteTodo
} from '$lib/server/database';

export const load: PageServerLoad = async ({ cookies }) => {
	let userId = cookies.get('userid');

	if (!userId) {
		const { id } = await createUser();
		userId = id;
		cookies.set('userid', id, { path: '/' });
	}

	const todos = getTodos({ userId }) ?? [];

	return { todos };
};

export const actions = {
	addTodo: async ({ cookies, request }) => {
		const userId = String(cookies.get('userid'));
		const formData = await request.formData();
		const text = String(formData.get('text'));

		try {
			await createTodo({
				userId,
				text
			});
		} catch (error) {
			if (error instanceof Error) {
				return fail(422, {
					error: error.message
				});
			} else {
				throw new Error(String(error));
			}
		}

		return { success: true };
	},
	editTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));
		const text = String(formData.get('text'));

		await editTodo({ id, text });

		return { success: true };
	},
	toggleTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));

		await toggleTodo({ id });

		return { success: true };
	},
	deleteTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));

		await deleteTodo({ id });

		return { success: true };
	}
} satisfies Actions;

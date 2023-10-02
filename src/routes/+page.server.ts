import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

import { getTodos, createTodo, editTodo, toggleTodo, deleteTodo } from '$lib/server/database';

export const load: PageServerLoad = async () => {
	const todos = getTodos();

	return { todos };
};

export const actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData();
		const text = String(formData.get('text'));

		if (!text) {
			return fail(400, { text, missing: true });
		}

		createTodo({
			text
		});

		return { success: true };
	},
	editTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));
		const text = String(formData.get('text'));

		editTodo({ id, text });

		return { success: true };
	},
	toggleTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));

		toggleTodo({ id });

		return { success: true };
	},
	deleteTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id'));

		deleteTodo({ id });

		return { success: true };
	}
} satisfies Actions;

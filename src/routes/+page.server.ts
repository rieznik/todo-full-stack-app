import type { Todo } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/todo');
	const todos = (await response.json()) as Todo[];

	return { todos };
};

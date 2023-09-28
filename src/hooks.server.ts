import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.searchParams.has('_method')) {
		const path = event.url.origin + event.url.pathname;
		await fetch(path, { method: 'DELETE' });

		const response = new Response(null, {
			status: 303,
			headers: {
				location: '/'
			}
		});
		return response;
	}

	const response = await resolve(event);
	return response;
};

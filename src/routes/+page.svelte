<script>
	import TodoItem from '$lib/todo-item.svelte';

	const title = 'Todos';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="wrapper">
	<h1 class="title">{title}</h1>

	<form action="" method="" class="new">
		<input type="text" name="text" aria-label="Add a todo" placeholder="Create new task" />
	</form>

	<TodoItem />
	<TodoItem />
	<TodoItem />
</div>

<style>
	.wrapper {
		width: 100%;
		max-width: 40rem;
		margin: 8.125rem auto 0 auto;
	}

	.title {
		margin-bottom: 1.875rem;
	}

	.new {
		margin-bottom: 1.875rem;
	}

	.new input {
		font-family: Comfortaa, sans-serif;
		font-size: 1.125rem;
		font-weight: 400;
		color: var(--text-base-color);
		background-color: var(--primary-10-color);
		width: 100%;
		padding: 18px;
		border-radius: 12px;
	}

	.new input::placeholder {
		color: var(--text-50-color);
		opacity: 1;
	}

	.new input:focus {
		outline: 1px solid var(--secondary-base-color);
	}
</style>

<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';

	export let data;
	export let form;

	const title = 'Todos';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="wrapper">
	<h1 class="title">{title}</h1>

	<form action="?/addTodo" method="POST" class="new" class:required={form?.missing}>
		<input
			type="text"
			name="text"
			aria-label="Add a todo"
			placeholder="Create new task"
			autocomplete="off"
		/>
		{#if form?.missing}
			<p class="error">Please enter todo's text</p>
		{/if}
	</form>

	{#each data.todos as todo}
		<TodoItem {todo} />
	{/each}
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
		background-color: var(--primary-5-color);
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

	.required input {
		outline: 1px solid var(--danger-base-color);
	}

	.error {
		position: absolute;
		top: calc(100% + 0.5em);
		color: var(--danger-base-color);
	}
</style>

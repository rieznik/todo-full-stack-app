<script>
	import TodoItem from '$lib/todo-item.svelte';

	const title = 'Todos';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<form action="" method="">
	<input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
</form>

<TodoItem />

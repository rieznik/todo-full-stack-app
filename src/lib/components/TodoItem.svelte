<script lang="ts">
	import type { Todo } from '$lib/types';

	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let todo: Todo;
</script>

<div class="todo" in:fly={{ y: 20 }} out:slide>
	<form action="?/toggleTodo" method="POST" use:enhance>
		<input type="hidden" name="id" value={todo.id} />
		<button
			aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"
			class="toggle"
			class:checked={todo.done}
		/>
	</form>

	<form action="?/editTodo" method="POST" class="edit" use:enhance>
		<input type="hidden" name="id" value={todo.id} />
		<input name="text" type="text" class="text" value={todo.text} />
		<button aria-label="Save todo" class="save" />
		<button formaction="?/deleteTodo" aria-label="Delete todo" class="delete" />
	</form>
</div>

<style>
	.todo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14px;
		border-radius: 12px;
	}

	.todo:hover {
		box-shadow: 0px 2px 10px 0px #e9f6f6;
	}

	.toggle {
		border: 1.5px solid var(--primary-color);
		margin-right: 14px;
		background: none;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
	}

	.toggle.checked {
		background-color: var(--primary-color);
		background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%229%22%20viewBox%3D%220%200%2012%209%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M4%206.59999L9.9%200.699988C10.0833%200.516654%2010.3167%200.424988%2010.6%200.424988C10.8833%200.424988%2011.1167%200.516654%2011.3%200.699988C11.4833%200.883321%2011.575%201.11665%2011.575%201.39999C11.575%201.68332%2011.4833%201.91665%2011.3%202.09999L4.7%208.69999C4.5%208.89999%204.26667%208.99999%204%208.99999C3.73334%208.99999%203.5%208.89999%203.3%208.69999L0.700003%206.09999C0.51667%205.91665%200.425003%205.68332%200.425003%205.39999C0.425003%205.11665%200.51667%204.88332%200.700003%204.69999C0.883336%204.51665%201.11667%204.42499%201.4%204.42499C1.68334%204.42499%201.91667%204.51665%202.1%204.69999L4%206.59999Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E');
		background-repeat: no-repeat;
		background-position: center;
	}

	.edit {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.text {
		font-family: Comfortaa, sans-serif;
		font-size: 1rem;
		font-weight: 400;
		color: var(--text-base-color);
		padding: 5px 0;
		margin-right: 14px;
		width: 90%;
	}

	.save,
	.delete {
		height: 1.5rem;
		width: 1.5rem;
		border: none;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		cursor: pointer;
	}

	.save {
		visibility: hidden;
		margin-right: 14px;
		background-image: url('$lib/icons/save.svg');
	}

	.save:hover {
		background-image: url('$lib/icons/save-filled.svg');
	}

	.text:focus-visible + .save {
		visibility: visible;
	}

	.delete {
		background-image: url('$lib/icons/delete.svg');
	}

	.delete:hover {
		background-image: url('$lib/icons/delete-forever.svg');
	}
</style>

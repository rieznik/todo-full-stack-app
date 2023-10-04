import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodos = async () => {
	const todos = await prisma.todo.findMany();

	return todos;
};

export const createTodo = async ({ text }: { text: string }) => {
	const todo = await prisma.todo.create({
		data: {
			createdAt: new Date(),
			done: false,
			text
		}
	});

	return todo;
};

export const editTodo = async ({ id, text }: { id: string; text: string }) => {
	const result = await prisma.todo.update({
		where: {
			id: id
		},
		data: {
			text: text
		}
	});

	return result;
};

export const toggleTodo = async ({ id }: { id: string }) => {
	const todo = await prisma.todo.findUnique({
		where: { id }
	});

	const result = await prisma.todo.update({
		where: {
			id
		},
		data: {
			done: !todo?.done
		}
	});

	return result;
};

export const deleteTodo = async ({ id }: { id: string }) => {
	console.log('id', id);

	const result = await prisma.todo.delete({
		where: {
			id
		}
	});

	console.log('result', result);

	return result;
};

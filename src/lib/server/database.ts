import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async () => {
	const userId = await prisma.user.create({
		data: {}
	});

	return userId;
};

export const getTodos = async ({ userId }: { userId: string }) => {
	const todos = await prisma.todo.findMany({
		where: {
			userId
		},
		orderBy: {
			createdAt: 'asc'
		}
	});

	return todos;
};

export const createTodo = async ({ userId, text }: { userId: string; text: string }) => {
	if (text === '') {
		throw new Error("Please enter todo's text");
	}

	const todos = await getTodos({ userId });

	if (todos.find((todo) => todo.text === text)) {
		throw new Error('You already have this todo in the list');
	}

	const todo = await prisma.todo.create({
		data: {
			createdAt: new Date(),
			done: false,
			text,
			userId
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
	const result = await prisma.todo.delete({
		where: {
			id
		}
	});

	return result;
};

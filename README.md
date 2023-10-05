# [Todos app](https://todo-full-stack-app.vercel.app/)

I have created this app to learn how to build simple CRUD full-stack app.

![Screenshot of the todo app](./docs/Todos-screenshot.jpg)

I have used:

- ![Svelte](https://img.shields.io/badge/svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white) and ![SvelteKit](https://img.shields.io/badge/sveltekit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white) for frontend and backend
- ![Prisma](https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) to model data
- ![Supabase](https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white) for storing users and their todo lists in the Postgres database
- ![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) for hosting

## Developing

I used ![Bun](https://img.shields.io/badge/bun-000000?style=for-the-badge&logo=bun&logoColor=white) for this project just to play around, so to
install dependencies use:

```bash
bun install
```

Start a development server:

```bash
bun --bun run dev
```

Run prisma studio:

```bash
bunx prisma generate
bunx prisma studio
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

## Additional resources

- [Setting up a local PostgreSQL database for prisma](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-macos)
- [Get started using Prisma with Bun](https://bun.sh/guides/ecosystem/prisma)
- [Everything you need to build a Svelte project, powered by `create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

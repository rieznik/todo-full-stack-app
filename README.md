# Todos app

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

I used [Bun](https://bun.sh) for this project just to play around, so to
install dependencies use:

```bash
bun install
```

Start a development server:

```bash
bun --bun run dev
```

Generate and run initial Prisma migration:

```bash
bunx prisma migrate dev
```

Run prisma studio:

```bash
bunx prisma studio
```

### Additional resources

- [Setting up a local PostgreSQL database for prisma](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-macos)
- [Get started using Prisma with Bun](https://bun.sh/guides/ecosystem/prisma)

## Building (update?)

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

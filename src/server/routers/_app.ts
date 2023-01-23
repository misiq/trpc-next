import { z } from "zod";
import { procedure, router } from "../trpc";

interface User {
	id: string;
	name: string;
}

const userList: User[] = [
	{
		id: "1",
		name: "KATT",
	},
];

export const appRouter = router({
	hello: procedure.input(z.object({ text: z.string() })).query(({ input }) => {
		return { greeting: `hello ${input.text}` };
	}),

	getUserById: procedure.input(z.object({ text: z.string() })).query(({ input }) => {
		const user = userList.find((u) => u.id === input.text);

		return user;
	}),
});

export type AppRouter = typeof appRouter;

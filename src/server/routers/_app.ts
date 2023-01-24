import { z } from "zod";
import { prisma } from "../prisma";
import { procedure, router } from "../trpc";

export const appRouter = router({
	hello: procedure.input(z.object({ text: z.string() })).query(({ input }) => {
		return { greeting: `hello ${input.text}` };
	}),

	getUserById: procedure.input(z.object({ text: z.number() })).query(({ input }) => {
		return prisma.user.findFirst({ where: { id: input.text } });
	}),
});

export type AppRouter = typeof appRouter;

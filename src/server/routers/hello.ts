import { router, procedure } from "../trpc";
import { z } from "zod";
import { prisma } from "../prisma";

export const helloRouter = router({
	halko: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
		return {
			text: `dear ${input.name}`,
		};
	}),

	greetByUserId: procedure.input(z.object({ id: z.number() })).query(({ input }) => {
		return prisma.user.findFirst({ where: { id: input.id } });
	}),
});

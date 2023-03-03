import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const codeSnippetRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ content: z.string().min(1).max(4096) }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.codeSnippet.create({
        data: input,
        select: { id: true },
      });
    }),
  get: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.codeSnippet.findUnique({
        where: { id: input.id },
        select: { content: true },
      });
    }),
});

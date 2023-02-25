import { createTRPCRouter } from "~/server/api/trpc";
import { codeSnippetRouter } from "~/server/api/routers/codeSnippet";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  codeSnippet: codeSnippetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

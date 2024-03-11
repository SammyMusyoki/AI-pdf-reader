import { publicProcedure, router } from './trpc';

export const appRouter = router({
    test: publicProcedure.query(() => {
        return new Response ('Ok')
    })
});

// Export type router type signature
// Not the router itself

export type AppRouter = typeof appRouter
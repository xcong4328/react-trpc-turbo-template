import { z } from 'zod';
import { publicProcedure, router } from '@api/trpc';

// Define the input schema
export const schema = z.object({
  name: z.string(),
});

// Export the helloRouter with a single procedure `get`
export const helloRouter = {
  get: publicProcedure.input(schema).query(async ({ input }) => ({
    success: true,
    message: `Hello ${input.name}!`,
  })),
};

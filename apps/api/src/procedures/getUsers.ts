import { publicProcedure } from '@api/trpc';
import { prisma } from '@repo/database/src/db';

export const getUsers = publicProcedure.query(async () => {
    try {
        const users = await prisma.user.findMany();
        return { success: true, users };
    } catch (error) {
        console.error('Error fetching users:', error);
        return { success: false, error: 'Failed to fetch users' };
    }
});

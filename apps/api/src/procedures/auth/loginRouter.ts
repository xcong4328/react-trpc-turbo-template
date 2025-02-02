import { publicProcedure } from '@api/trpc';
import { prisma } from '@repo/database/src/db';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const authSchema = z.object({
    userName: z.string().min(1, "User name is required"),
    password: z.string().min(1, "Password is required"),
});

const fakeUsrs = [
    {id:'1', userName: "admin", password: "admin123"},
    {id:'2', userName: "user", password: "user123"}
]

export const loginRouter = publicProcedure
    .input(authSchema)
    .mutation(async ({ input }) => {
        const users = await prisma.user.findMany()
        // const users = await prisma.user.findMany();

        console.log("⛳️ log ~ .mutation log ~ users: ", users)

        const { userName, password } = input;

        const user = fakeUsrs.find(u=>u.userName === userName  && u.password === password)
        if(!user){
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Invalid user or password'
            })
        }

        const token = `fake-token-${user.id}`

        return {
        success: true,
        token,
        user: {
            id: user.id,
            userName: user.userName
        },
        };
});

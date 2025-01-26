import { publicProcedure } from '@api/trpc';

export type User = {
    id: string;
    name: string;
    email: string;
};

// Simulated database (replace with your actual database implementation)
const usersDB: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com' },
];

// Export `getUsers` directly as a procedure
export const getUsers = publicProcedure.query(async () => {
    // Fetch users from database (replace with real database query)
    return {
        success: true,
        users: usersDB,
    };
});


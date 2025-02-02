import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Delete all existing users
    await prisma.user.deleteMany();

    await prisma.user.createMany({
        data: [
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' },
        { name: 'Charlie', email: 'charlie@example.com' },
        ],
    });

    console.log('Seeding completed.');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });

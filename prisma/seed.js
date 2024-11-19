const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const mockUsers = [
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
    {
      name: 'Bob Smith',
      email: 'bob@example.com',
    },
    {
      name: 'Charlie Brown',
      email: 'charlie@example.com',
    },
  ];

  for (const user of mockUsers) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.log('Seed data has been inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

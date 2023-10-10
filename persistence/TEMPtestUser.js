const { PrismaClient } = require('./prisma/generated/client'); // Adjust the path as needed
const prisma = new PrismaClient();

async function createUser() {
    try {
        const user = await prisma.USERS.create({
            data: {
                name: 'John Doe',
                username: 'johndoe',
                password: 'your_password',
                parking_pass_type: 'your_pass_type',
                address: '123 Main St',
                bio: 'This is a test bio',
            },
        });
        console.log('Created user:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
}


createUser()
    .catch((error) => {
        console.error('Error creating user:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

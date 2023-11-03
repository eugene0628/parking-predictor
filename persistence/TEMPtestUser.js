const { PrismaClient } = require('./prisma/generated/client'); // Adjust the path as needed
const prisma = new PrismaClient();

async function createUser() {
    try {
        const user = await prisma.USERS.create({
            data: {
                name: 'ADMIN USER',
                admin: true,
                username: 'admin',
                password: 'admin',
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

    // try {
    //     const user = await prisma.SESSIONS.create({
    //         data: {
    //             USER: 1,
    //             rec_garage: 'Hello',
    //             rec_avail_1: 1,
    //             rec_travel_time_1: 2,
    //             rec_avail_2: 3,
    //             rec_travel_time_2: 4,
    //             rec_avail_3: 5,
    //             rec_travel_time_3: 6,
    //         },
    //     });
    //     console.log('Created user:', user);
    // } catch (error) {
    //     console.error('Error creating user:', error);
    // } finally {
    //     await prisma.$disconnect();
    // }
}


createUser()
    .catch((error) => {
        console.error('Error creating user:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

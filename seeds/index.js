const seedThePosts = require('./post-seed');
const seedTheUsers = require('./user-seed');
const seedTheComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedTheDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n - Database Synced - \n');

    await seedTheUsers();
    console.log('\n - Users Seeded = \n');

    await seedThePosts();
    console.log('\n - Posts Seeded - \n');

    await seedTheComments();
    console.log('\n - Comments Seeded - \n');

    process.exit(0);
}

seedTheDatabase();
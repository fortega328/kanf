const sequelize = require('../config/config');
const {User} = require('../models');

const questions = require ('./questions.json')

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(question, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);

};
seedDatabase();
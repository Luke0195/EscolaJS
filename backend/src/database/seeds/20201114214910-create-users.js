const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Robert Garcia',
        email: 'robertgarcia@kof.com.br',
        password_hash: await bcryptjs.hash('4124124124', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Wilson Guerra',
        email: 'wilsonG@gmail.com',
        password_hash: await bcryptjs.hash('9191919191', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Mario Word',
        email: 'marioworld@mario.com.br',
        password_hash: await bcryptjs.hash('303030', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: () => {},
};

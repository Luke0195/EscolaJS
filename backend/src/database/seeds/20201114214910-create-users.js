const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: ' Terry  Bogard',
        email: 'terrybogard@kof.com.br',
        password_hash: await bcryptjs.hash('kof94', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: ' Rugal Bernstein',
        email: 'rugalbernstein@kof.com.br',
        password_hash: await bcryptjs.hash('apelao', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: ' João Inácio',
        email: 'joaoinacio@rocketseat.com.br',
        password_hash: await bcryptjs.hash('birobirobiro', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Thiago Lima',
        email: 'thiagoLima@rocketseat.com.br',
        password_hash: await bcryptjs.hash('capita', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down: () => {},
};

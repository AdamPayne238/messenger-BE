// Update with your config settings.

// REF creating .db3 for different environments
// $ knex migrate:latest --env development
// $ knex migrate:latest --env test

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/user.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database.seeds',
    },
  },

}

// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.db3'
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      URI: 'postgres://ljkjxvqsidrkar:d34dbf6f44dd00b0d3118a3c80b3a996b6946f810530e934d58268b19cffe4e6@ec2-174-129-27-3.compute-1.amazonaws.com:5432/d38remnraggfnh'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

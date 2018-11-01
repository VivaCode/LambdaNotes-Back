module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/notes.sqlite3' }, // change this if you want a different name for the database
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  },
  // production: {
  //   client: 'pg',
  //   connection: dbConnection,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './db/migrations',
  //   },
  //   seeds: {
  //     directory: './db/seeds',
  //   },
  // },
};

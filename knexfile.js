module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/groceries.db3' // put db filename in here
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations' // put migrations here
        },
        seeds: {
            directory: './database/seeds' // put seeds here
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done);
            }
        },
    },

//     staging: {
//         client: 'postgresql',
//         connection: {
//             database: 'my_db',
//             user: 'username',
//             password: 'password'
//         },
//         pool: {
//             min: 2,
//             max: 10
//         },
//         migrations: {
//             tableName: 'knex_migrations'
//         }
//     },

//     production: {
//         client: 'postgresql',
//         connection: {
//             database: 'my_db',
//             user: 'username',
//             password: 'password'
//         },
//         pool: {
//             min: 2,
//             max: 10
//         },
//         migrations: {
//             tableName: 'knex_migrations'
//         }
//     }

};

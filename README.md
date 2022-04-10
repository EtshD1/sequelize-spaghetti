# Sequelize Spaghetti

This is simple usage of sequelize, a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. This project uses the `mssql` dialect.

## Getting started

1. Make sure you create a .env file with a `db_name`, `db_server`, `db_username`, and `db_password`. These values are used to create a sequelize instance.

2. Install node dependancies by running `npm install` or `npm i`.

3.  - You can build the JavaScript file using the TypeScript compiler. To do that make sure TypeScript is install globally and then run `tsc` in a terminal.
    - Now run `npm start` and the API will run.

4. Alternatively to step 3, You can run `npm run dev` if you have both `nodemon` and `ts-node` install globally or locally.

### Dependancies

-   `dotenv` reads the environment values.
-   `express` web framework for node.
-   `sequelize` the whole point of this repository.
-   `tedious` used to interact with instances of Microsoft's SQL Server.

## Thank you

This repository primary purpose is to act as a reminder for me on how to use sequelize - v6. If you found any use for this repository or any bad habits I implemented, please feel free to let me.

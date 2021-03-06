import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { db_name, db_server, db_username, db_password } = process.env;

const sequelize = new Sequelize(
	`${db_name}`,
	`${db_username}`,
	`${db_password}`,
	{
		host: `${db_server}`,
		dialect: "mssql",
	}
);

export default sequelize;

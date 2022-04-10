import sequelize from ".";
import { DataTypes, Model } from "sequelize";

class User extends Model {
	toJSON() {
		return { ...this.get(), id: undefined };
	}
}

User.init(
	{
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { msg: "User must have a first name" },
				notEmpty: { msg: "First name must not be empty" },
			},
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { msg: "User must have a last name" },
				notEmpty: { msg: "Last name must not be empty" },
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { msg: "User must have a email" },
				notEmpty: { msg: "Email must not be empty" },
				isEmail: { msg: "Must be a valid email address" },
			},
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { msg: "User must have a role" },
				notEmpty: { msg: "Role must not be empty" },
			},
		},
	},
	{
		sequelize,
		modelName: "User",
		tableName: "users",
	}
);

export default User;

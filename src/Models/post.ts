import sequelize from ".";
import { Model, DataTypes } from "sequelize";

class Post extends Model {
	static associate() {}

	toJSON() {
		return { ...this.get(), id: undefined, owner: undefined };
	}
}

Post.init(
	{
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		body: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: { msg: "Post must have a body" },
				notEmpty: { msg: "Body must not be empty" },
			},
		},
	},
	{
		sequelize,
		modelName: "Post",
		tableName: "posts",
	}
);

export default Post;

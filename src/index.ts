import db from "./Models";
import User from "./Models/user";
import Post from "./Models/post";

User.hasMany(Post, { foreignKey: "owner", as: "posts" });
Post.belongsTo(User, { foreignKey: "owner", as: "user" });

db.sync({ force: true });

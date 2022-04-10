import db from "./Models";
import User from "./Models/user";
import Post from "./Models/post";
import express from "express";

User.hasMany(Post, { foreignKey: "owner", as: "posts" });
Post.belongsTo(User, { foreignKey: "owner", as: "user" });

const app = express();
app.use(express.json());

app.listen(8080, async () => {
	console.log("Syncing Database");
	await db.sync({ force: true });
	console.log("Database Synced!\nAPI Running at http://localhost:8080");
});

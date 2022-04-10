import { Router } from "express";
import User from "../Models/user";
import Post from "../Models/post";

const router = Router();

router.post("/posts", async (req, res) => {
	const userUuid = req.headers.user;
	const body = req.body.content;

	if (userUuid) {
		if (!body) {
			return res.json({ error: "Please supply body" }).status(400);
		}
		try {
			const owner = await User.findOne({ where: { uuid: userUuid } });
			if (owner) {
				const newPost = await Post.create({
					body,
					owner: owner.get().id,
				});
				return res.json(newPost);
			}
			return res.status(400).json({
				error: "Invalid User",
			});
		} catch (error) {
			console.log(error);
			return res.json(error).status(500);
		}
	}
	return res
		.json({
			error: "Please login",
		})
		.status(401);
});
router.get("/posts", async (req, res) => {
	try {
		const posts = await Post.findAll({ include: "user" });
		return res.json(posts);
	} catch (error) {
		console.log(error);
		return res.json(error).status(500);
	}
});

export default router;

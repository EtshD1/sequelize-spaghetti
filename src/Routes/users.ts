import { Router } from "express";
import User from "../Models/user";

const router = Router();

router.post("/users", async (req, res) => {
	const { firstName, lastName, email, role } = req.body;

	try {
		const newUser = await User.create({ firstName, lastName, email, role });
		return res.json(newUser);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
router.get("/users", async (req, res) => {
	try {
		const users = await User.findAll({ include: "posts" });
		return res.json(users);
	} catch (err) {
		console.log(err);
		return res.json(err).status(500);
	}
});
router.get("/users/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const user = await User.findOne({ where: { uuid }, include: "posts" });
		if (user) {
			return res.json(user);
		}
		return res.json({ error: "UUID does not exist" }).status(404);
	} catch (error) {
		console.log(error);
		return res.json(error).status(500);
	}
});

export default router;

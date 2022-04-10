import { Router } from "express";
import users from "./users";
import posts from "./posts";

const router = Router();

router.use(users);
router.use(posts);

export default router;

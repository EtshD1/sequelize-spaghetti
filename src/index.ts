import dotenv from "dotenv";
import db from "./Models";

dotenv.config();

db.sync({ force: true });

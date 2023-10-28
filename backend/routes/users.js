import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

//not safe to do calls like this so lets create a controllers folder and just call it from there
// router.get("/test", (req, res) => {
//   res.send("It works just fine!");
// });

router.get("/find/:userId", getUser);
router.put("/", updateUser);

export default router
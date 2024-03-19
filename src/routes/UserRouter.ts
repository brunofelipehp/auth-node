import { express, jwt } from "../app";
import { checkToken, findUserById } from "../controllers/UserController";
require("dotenv").config();
const router = express.Router();

router.get("/user/:id", checkToken, findUserById);

module.exports = router;

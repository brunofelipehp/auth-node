import { express } from "../app";
import { inicialMessage, login, register } from "../controllers/AuthController";
require("dotenv").config();
const router = express.Router();

router.get("/", inicialMessage);

router.post("/auth/register", register);

router.post("/auth/login", login);

module.exports = router;

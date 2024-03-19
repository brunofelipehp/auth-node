import { bcrypt, jwt, User } from "../app";

require("dotenv").config();

export const inicialMessage = (req, res) => {
  res.status(200).json({ msg: "Created successfully" });
};

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!password || !email) {
    return res.status(402).json({ msg: "email and password are required" });
  }

  if (!name) {
    return res.status(402).json({ msg: "name is required" });
  }

  if (password !== confirmPassword) {
    return res.status(402).json({
      msg: "password and password confirmation need to be the same",
    });
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res
      .status(402)
      .json({ msg: "This user already exists. create another user" });
  }

  const salt = await bcrypt.genSalt(12);

  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({ name, email, password: passwordHash });

  try {
    await user.save();

    return res.status(201).json({ msg: "Created user successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: "A router error occurred, please try again later",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(402).json({ msg: "email and password are required" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "User not found!!!" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Password invalid!!!" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user.id,
      },
      secret
    );

    res
      .status(200)
      .json({ msg: "Authentication completed successfully", token });
  } catch (error) {
    return res.status(500).json({
      msg: "A router error occurred, please try again later",
    });
  }
};

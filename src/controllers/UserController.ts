import { jwt, User } from "../app";

export const findUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id, "-password");

    if (!user) {
      return res.status(401).json({ msg: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(404).json({ msg: "Usuário não existe" });
  }
};

export const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(400).json({ msg: "Token invalido" });
  }
};

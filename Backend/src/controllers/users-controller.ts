import db from "../models";
const bcrypt = require("bcrypt")
import { RequestHandler } from "express";

interface RequestUserBody {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUser: RequestHandler = async (req, res) => {
  const { name, lastName, email, password } = <RequestUserBody>req.body;
  try {
    let hashedPassword = await bcrypt.hash(password, 5)
    await db.User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });
    res.json({ message: "User successfully created" });
  } catch (err: any) {
    res.json(err.message);
  }
};

export const getUsers: RequestHandler = async (_req, res) => {
  try {
    const users = await db.User.findAll();
    res.json({ Users: users });
    // res.json({"message": "working on it!"})
  } catch (err: any) {
    res.status(500).json({"message": "Not users Found"});
  }
};

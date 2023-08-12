import express from "express";
import createUser from "../controllers/users-controller";
// const HttpError = require('../models/http-error')

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("GET users");
  res.json({ message: "It works!" });
});

router.post('/signup', createUser)

module.exports = router;
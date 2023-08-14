import express from "express";
import {getUsers, createUser }from "../controllers/users-controller";
// const HttpError = require('../models/http-error')

const router = express.Router();

router.get("/", getUsers);

router.post('/signup', createUser);

module.exports = router;
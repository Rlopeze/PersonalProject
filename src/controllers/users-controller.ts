// import db from '../models'
// const bcrypt = require("bcrypt")
import { RequestHandler } from "express"

interface RequestUserBody {
    name: string,
    lastName: string,
    email: string,
    password: string
}

const createUser: RequestHandler= async (req , res) =>{
    const userData = <RequestUserBody> req.body
    console.log(userData)
    // const a = await bcrypt.hash(userData.password, 10)
    res.json({"message": "Created User"})
}

export default createUser;

import bcript from "bcrypt"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";
import { ModelCreator } from "../models/SchemaCreator";

export async function CreateCreator(req: Request, res: Response) {
    const { name, email, password } = req.body
    try {
        const salt = await bcript.genSalt(12)
        const passwordEncripted = await bcript.hash(password, salt)
        const newCreator = {
            name:name,
            email:email,
            password:passwordEncripted,
            posts:{}
        }
        await ModelCreator.create(newCreator)
        res.status(201).json({msg:"usuario criado com sucesso"})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}
export async function loginCreator(req: Request, res: Response) {
    const {email,password} = req.body
    const user = await ModelCreator.findOne({email:email})
    if(!user){
        return res.status(404).json({msg:"email não cadastrado"})
    }
    const match = await bcript.compare(user.password,password)
    if(!match){
        return res.status(400).json({msg:"senha digitada esta incorreta"})
    }

    const secret = process.env.SECRET
    const token = jwt.sign({
        id:user._id,
        creator:true
    },secret!)
    res.status(200).json({token:token})
    
}


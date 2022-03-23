import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken"
export async function ValidatialToken(req:Request,res:Response,next:NextFunction) {
    
    const authHeader = req.headers.authorization
    const token = authHeader&& authHeader.split(' ')[1]
    const secret = process.env.SECRET
    try {
        if(!jwt.verify(token!,secret!)){
            return res.end()
        }
        next()
    } catch (error) {
        return res.status(401).json({msg:'acesso negado'})
    }
    
}
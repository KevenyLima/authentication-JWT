import { NextFunction, Request, Response } from "express";

export function validatialCreatePost(req:Request,res:Response,next:NextFunction){
    const {title,creatorId,content}= req.body
    formatTitle(res,title)
    formatCreateId(res,creatorId)
    formatContent(res,content)
    next()
}

function formatTitle(res:Response,title:string){
    if(typeof title !== 'string'){
        res.status(400).json({msg:'tipo invalido para titulo'})
    }
    if(title.length<3){
        res.status(400).json({msg:'o titulo deve conter pelo menos 3 caracteres'})
    }
}
function formatCreateId(res:Response,creatorId:string){
    if(typeof creatorId !=='string'){
        res.status(400).json({msg:'tipo invalido para id'})
    }
    if(!creatorId){
        res.status(400).json({msg:'id obrigatório'})
    }
}
function formatContent(res:Response,content:object){
    if(typeof content !== 'object'){
        res.status(400).json({msg:'formato do conteudo invalido'})
    }
    if(!content){
        res.status(400).json({msg:'o conteudo não pode ser vasio'})
    }
}
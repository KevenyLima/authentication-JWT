import { NextFunction, Request, Response } from "express";

export function validatialCreatePost(req:Request,res:Response,next:NextFunction){
    const {title,creatorId,content}= req.body
    if(validateFormat(res,title,creatorId,content)){
        return next()
    }else{
       return res.end()
    }
}
function validateFormat(res:Response,title:string,creatorId:string,content:object):Boolean{
    if( formatTitle(res,title)===true && formatContent(res,content)===true && formatCreateId(res,creatorId)===true ){
        return true 
    }
    return false
}


function formatTitle(res:Response,title:string):Boolean{
    if(typeof title !== 'string'){
        res.status(400).json({msg:'tipo invalido para titulo'})
        return false
    }
    if(title.length<3){
        res.status(400).json({msg:'o titulo deve conter pelo menos 3 caracteres'})
        return false
    }
    return true
}
function formatCreateId(res:Response,creatorId:string):Boolean{
    if(typeof creatorId !=='string'){
        res.status(400).json({msg:'tipo invalido para id'})
        return false
    }
    if(!creatorId){
        res.status(400).json({msg:'id obrigatório'})
        return false
    }
    return true
}
function formatContent(res:Response,content:object):Boolean{
    if(typeof content !== 'object'){
        res.status(400).json({msg:'formato do conteudo invalido'})
        return false
    }
    if(!content){
        res.status(400).json({msg:'o conteudo não pode ser vasio'})
        return false
    }
    return true
}
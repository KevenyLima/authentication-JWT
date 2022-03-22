import { Request,Response } from "express"
import { ModelPost } from "../models/SchemaPost"
export function createPost(req:Request,res:Response){
    const {creatorId,content,title} = req.body
    const newPost ={
        creatorId,
        content,
        title
    } 
    try {
        ModelPost.create(newPost)
        res.status(201).json({msg:'post criado com sucesso'})
    } catch (error) {
        console.log(error)
    }
}
export function deletePost(req:Request,res:Response){
    const id = req.params.idPost
    const post = ModelPost.findById(id)
    if(!post){
        res.status(404).json({msg:'post não encontrado'})
    }
    try {
        ModelPost.deleteOne({_id:id}) 
        res.status(200)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'não foi possivel deletar o post. tente mais tarde'})
    }
}
export function updatePost(req:Request,res:Response){
    
}
export function getAllPost(req:Request,res:Response){
    
}
export function findPost(req:Request,res:Response){
    
}
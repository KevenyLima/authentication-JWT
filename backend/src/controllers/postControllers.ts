import { Request,Response } from "express"
import { ModelPost } from "../models/SchemaPost"
export async function createPost(req:Request,res:Response){
    const {creatorId,content,title} = req.body
    const newPost ={
        creatorId,
        content,
        title
    } 
    try {
        await ModelPost.create(newPost)
        res.status(201).json({msg:'post criado com sucesso'})
    } catch (error) {
        console.log(error)
    }
}
export async function deletePost(req:Request,res:Response){
    const id = req.params.idPost
    const post = await ModelPost.findOne({_id:id})
    if(!post){
        return res.status(422).json({msg:'post não encontrado'})
    }
    try {
        await ModelPost.deleteOne({_id:id}) 
        return res.status(200).json({msg:'post deletado com sucesso'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:'não foi possivel deletar o post. tente mais tarde'})
    }
}
export async function updatePost(req:Request,res:Response){
    res.status(200).json({msg:'rota upadate ainda nao terminada'})
}
export async function getAllPost(req:Request,res:Response){
    res.status(200).json({msg:'rota getallpost ainda nao terminada'})
}
export async function findPost(req:Request,res:Response){
    res.status(200).json({msg:'rota findpost ainda nao terminada'})
}
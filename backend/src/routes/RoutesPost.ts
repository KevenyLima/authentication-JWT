import { createPost, deletePost, findPost, getAllPost, updatePost } from "../controllers/postControllers"
import { validatialCreatePost } from "../middlewares/validationCreatePost"

const Router = require('express').Router()


Router.post('/',validatialCreatePost,createPost)
Router.put('/',validatialCreatePost,updatePost)
Router.delete('/:idPost',deletePost)
Router.get('/',getAllPost)
Router.get('/:idPost',findPost)


export default Router
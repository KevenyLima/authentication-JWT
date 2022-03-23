import { createPost, deletePost, findPost, getAllPost, updatePost } from "../controllers/postControllers"
import { validatialCreatePost } from "../middlewares/validationCreatePost"
import { ValidatialToken } from "../middlewares/validationToken"

const Router = require('express').Router()


Router.post('/',ValidatialToken,validatialCreatePost,createPost)
Router.put('/',ValidatialToken,validatialCreatePost,updatePost)
Router.delete('/:idPost',ValidatialToken,deletePost)
Router.get('/',getAllPost)
Router.get('/:idPost',findPost)


export default Router
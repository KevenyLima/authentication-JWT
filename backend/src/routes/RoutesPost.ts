import { Request, Response } from "express"
import { createPost, deletePost, findPost, getAllPost, updatePost } from "../controllers/postControllers"
import { validatialCreatePost } from "../middlewares/validationCreatePost"

const Router = require('express').Router()
Router.post('/',validatialCreatePost,createPost)
Router.put('/',validatialCreatePost,updatePost)
Router.delete('/:id',deletePost)
Router.get('/',getAllPost)
Router.get('/:id',findPost)


export default Router
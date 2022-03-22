import {model,Schema} from "mongoose";
import {ModelComment} from './SchemaComment'
const SchemaPost = new Schema({
    title:{type:String},
    content:{type:Array},
    creator:{type:String},
    comment:{type:ModelComment},

},{timestamps:true})

export const PostModel = model('post',SchemaPost)
import {model,Schema} from "mongoose";
import {ModelComment} from './SchemaComment'
const SchemaPost = new Schema({
    title:{type:String},
    content:{type:Array},
    creatorId:{type:String},
},{timestamps:true})

export const ModelPost = model('post',SchemaPost)
import {model,Schema} from 'mongoose'

const SchemaComment = new Schema({
    creatorId:{type:String},
    postId:{type:String},
    content:{type:String},
    likes:{type:Number},
},{timestamps:true})

export const ModelComment = model('comment',SchemaComment)
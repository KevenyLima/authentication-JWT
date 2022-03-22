import {model,Schema} from 'mongoose'

const SchemaComment = new Schema({
    creator:{type:String},
    content:{type:String},
    likes:{type:Number},
    reply:{type:Array}
},{timestamps:true})

export const ModelComment = model('comment',SchemaComment)
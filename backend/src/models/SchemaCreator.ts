import {model,Schema} from "mongoose";

const SchemaCreator= new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    posts:{type:Array}
},{timestamps:true})

export const ModelCreator = model('creator',SchemaCreator)
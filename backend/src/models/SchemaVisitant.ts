import {model,Schema} from "mongoose";

const SchemaVisitant = new Schema({
    name:{type:String},
    password:{type:String}
},{timestamps:true})

export const ModelVisitant = model('visitant',SchemaVisitant)
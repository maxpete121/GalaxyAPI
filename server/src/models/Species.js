import { Schema } from "mongoose";





export const SpeciesSchema = new Schema({
    name: {type: String, required: true, maxLength: 30},
    type: {type: String, required: true, enum: ['Human','Non-Human']}
})
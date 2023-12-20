import { Schema } from "mongoose";





export const PlanetSchema = new Schema({
    name: {type: String, required: true, maxLength: 50},
    type: {type: String, required: true, enum: ['M-Class', 'D-class', 'F-Class']},
    imgUrl: {type: String, required: true, maxLength: 300},
})
import { Schema } from "mongoose";




export const GalaxySchema = new Schema({
    name: {type: String, required: true, maxLength: 50},
    type: {type: String, required: true, enum: ['spiral', 'Eliptical', 'Irregular']},
    imgUrl: {type:String, required: true, maxLength: 300},
    planetId: {type: Schema.Types.ObjectId, ref: 'Planet', required: true}
},{toJSON: {virtuals: true}})

GalaxySchema.virtual('planet', {
    localField: 'planetId',
    foreignField: '_id',
    ref: 'Planet'
})
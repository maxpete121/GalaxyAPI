import { Schema } from "mongoose";





export const ColonySchema = new Schema({
    name: {type: String, required: true, maxLength: 30},
    age: {type: String, required: true, maxLength: 30},
    speciesId: {type: Schema.Types.ObjectId, ref:'Species', required: true},
    planetId: {type: Schema.Types.ObjectId, ref:'Planet',required: true}
},{toJSON: {virtuals: true}})

ColonySchema.virtual('planet',{
    localField: 'planetId',
    foreignField: '_id',
    ref: 'Planet'
})

ColonySchema.virtual('species',{
    localField: 'speciesId',
    foreignField: '_id',
    ref: 'Species'
})
import { dbContext } from "../db/DbContext.js"





class SpeciesService{
    async postSpecies(newSpecies){
        const made = await dbContext.Species.create(newSpecies)
        return made
    }

    async getSpecies(){
        const allSpecies = await dbContext.Species.find()
        return allSpecies
    }

    async deleteSpecies(speciesId){
        const removeSpecies = await dbContext.Species.findById(speciesId)
        await removeSpecies.remove()
        return`Species Removed`
    }
}

export const speciesService = new SpeciesService()
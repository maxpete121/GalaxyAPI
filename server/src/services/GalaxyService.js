import { dbContext } from "../db/DbContext.js"





class GalaxyService{

    async postGalaxy(galaxy){
        const newGalaxy = await dbContext.Galaxy.create(galaxy)
        return newGalaxy
    }

    async getGalaxy(){
        const allGalaxy = await dbContext.Galaxy.find()
        return allGalaxy
    }

    async deleteGalaxy(galaxyId){
        const galaxyDelete = await dbContext.Galaxy.findById(galaxyId)
        await galaxyDelete.remove()
        return `Galaxy Removed`
    }
}

export const galaxyService = new GalaxyService()
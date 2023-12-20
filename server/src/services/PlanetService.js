import { dbContext } from "../db/DbContext.js"




class PlanetService{

    async postPlanet(newPlanet){
        const planets = await dbContext.Planet.create(newPlanet)
        return planets
    }

    async getPlanets(){
        const gotPlanets = await dbContext.Planet.find()
        return gotPlanets
    }
}

export const planetService = new PlanetService()
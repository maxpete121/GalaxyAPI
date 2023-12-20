import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";




export class PlanetController extends BaseController{
    constructor(){
        super('api/planets')
        this.router
        .get('', this.getPlanets)
        .post('', this.postPlanet)
    }

    async postPlanet(request, response, next){
        try {
            const newPlanet = request.body
            const Posted = await planetService.postPlanet(newPlanet)
            response.send(Posted)
        } catch (error) {
            next(error)
        }
    }

    async getPlanets(request, response, next){
        try {
            const allPlanet = await planetService.getPlanets()
            response.send(allPlanet)
        } catch (error) {
            next(error)
        }
    }
}
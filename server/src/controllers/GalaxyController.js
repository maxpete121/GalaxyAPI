import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";




export class GalaxyController extends BaseController{
    constructor(){
        super('api/galaxy')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('', this.getGalaxy)
        .post('', this.postGalaxy)
        .delete('/:galaxyId', this.deleteGalaxy)
    }

    async postGalaxy(request, response, next){
        try {
            const galaxy = request.body
            const newGalaxy = await galaxyService.postGalaxy(galaxy)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }
    
    async getGalaxy(request, response, next){
        try {
            const galaxy = await galaxyService.getGalaxy()
            response.send(galaxy)
        } catch (error) {
            next(error)
        }   
    }

    async deleteGalaxy(request, response, next){
        try {
            const galaxyId = await request.params.galaxyId
            const foundGalaxy = await galaxyService.deleteGalaxy(galaxyId)
            response.send(foundGalaxy)
        } catch (error) {
            next(error)
        }
    }
}
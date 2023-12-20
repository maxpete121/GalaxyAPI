import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";





export class SpeciesController extends BaseController{
    constructor(){
        super('api/species')
        this.router
        .get('', this.getSpecies)
        .post('', this.postSpecies)
        .delete('/:speciesId', this.deleteSpecies)
    }

    async postSpecies(request, response, next){
        try {
            const newSpecies = request.body
            const madeSpecies = await speciesService.postSpecies(newSpecies)
            response.send(madeSpecies)
        } catch (error) {
            next(error)
        }
    }

    async getSpecies(request, response, next){
        try {
            const species = await speciesService.getSpecies()
            response.send(species)
        } catch (error) {
            next(error)
        }
    }

    async deleteSpecies(request, response, next){
        try {
            const speciesId = request.params.speciesId
            const deleted = await speciesService.deleteSpecies(speciesId)
            response.send(deleted)
        } catch (error) {
            next(error)
        }
    }
}
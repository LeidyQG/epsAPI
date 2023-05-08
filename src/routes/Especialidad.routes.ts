import { Router, Request, Response } from 'express'
import EspecialidadController from '../controllers/EspecialidadController'

/**
 * Router de la funcionalidad de especialidades
 * cuenta con un método get para listar las especiales por médico
 */
class EspecialidadRouter{

    router:Router
    especialidadController: EspecialidadController

    constructor(){

        this.router=Router()
        this.especialidadController= new EspecialidadController()
        this.routes()
    }

    private routes():void{

        this.router.get('/especialidad',
            (req:Request, res:Response)=> {
                this.especialidadController.obtenerEspecialidades(req,res)
            }        
        )
    }

}

export default new EspecialidadRouter().router
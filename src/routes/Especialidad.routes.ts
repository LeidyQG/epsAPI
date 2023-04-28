import { Router, Request, Response } from 'express'
import EspecialidadController from '../controllers/EspecialidadController'

class EspecialidadRouter{

    router:Router
    especialidadController: EspecialidadController

    constructor(){

        this.router=Router()
        this.especialidadController= new EspecialidadController()
        this.routes()
    }

    private routes():void{

        this.router.get('/citas',
            (req:Request, res:Response)=> {
                this.especialidadController.obtenerEspecialidades(req,res)
            }        
        )
    }

}

export default new EspecialidadRouter().router
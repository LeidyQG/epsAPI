import { Router, Request, Response } from 'express'
import CitaController from '../controllers/CitaController'

/**
 * Router de la funcionalidad de citas
 * cuenta con un método get para listar las citas por pacientes
 */
class CitaRouter{

    router:Router
    citaController: CitaController

    constructor(){

        this.router=Router()
        this.citaController= new CitaController()
        this.routes()
    }

    private routes():void{

        this.router.get('/citas',
            (req:Request, res:Response)=> {
                this.citaController.obtenerCitas(req,res)
            }        
        )
    }

}

export default new CitaRouter().router
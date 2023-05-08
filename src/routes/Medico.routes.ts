import { Router, Request, Response } from 'express'
import MedicoController from '../controllers/MedicoController'

/**
 * Router de la funcionalidad de médicos
 * cuenta con dos métodos
 *  get: Para listar los médicos con sus datos
 *  post: Para registrar un médico
 */
class MedicoRouter{

    router:Router
    medicoController: MedicoController

    constructor(){

        this.router=Router()
        this.medicoController= new MedicoController()
        this.routes()
    }

    private routes():void{

        this.router.get('/medicos',
            (req:Request, res:Response)=> {
                this.medicoController.obtenerMedicos(req,res)
            }        
        )

        this.router.post(
			'/crear_paciente',
            (req:Request, res:Response)=>{
                this.medicoController.crearMedico(req, res)
            }			
		)
    }

}

export default new MedicoRouter().router
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

        this.router.get('/medico/:tarjeta',
            (req:Request, res:Response)=> {
                this.medicoController.obtenerMedico(req,res)
            }        
        )

        this.router.get('/medicos',
        (req:Request, res:Response)=> {
            this.medicoController.obtenerMedicos(req,res)
        }        
    )

        this.router.post(
			'/crear_medico',
            (req:Request, res:Response)=>{
                this.medicoController.crearMedico(req, res)
            }			
		)

        this.router.delete('/medicos/:tarjeta',
        (req:Request, res:Response)=> {
            this.medicoController.eliminarMedico(req,res)
        }        
        )

        this.router.put('/medicos/:tarjeta',
        (req:Request, res:Response)=> {
            this.medicoController.actualizarMedico(req,res)
        }        
        )
    }

}

export default new MedicoRouter().router
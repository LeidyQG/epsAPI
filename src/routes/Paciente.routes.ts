import { Router, Response, Request } from 'express'
import PacienteController from '../controllers/PacienteController' 

/**
 * Router de la funcionalidad de pacientes
 * cuenta con dos métodos
 *  get: Para listar los pacientes con sus datos
 *  post: Para registrar un paciente
 */


class PacienteRouter{

    router:Router
    pacienteController:PacienteController

    constructor(){

        this.router= Router()
        this.pacienteController= new PacienteController()
        this.routes()

    }

    private routes():void{
        this.router.get(
			'/pacientes',
            (req:Request, res:Response)=>{
                this.pacienteController.obtenerPacientes(req,res)
            }
		)

        this.router.get('/paciente/:cedula',
        (req:Request, res:Response)=> {
            this.pacienteController.obtenerPaciente(req,res)
        }        
    )

		this.router.post(
			'/crear_paciente',
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req, res)
            }			
		)

        this.router.delete('/pacientes/:cedula',
        (req:Request, res:Response)=> {
            this.pacienteController.eliminarPaciente(req,res)
        }        
        )

        this.router.put('/pacientes/:Cedula',
        (req:Request, res:Response)=> {
            this.pacienteController.actualizarPaciente(req,res)
        }        
        )
    }
}

export default new PacienteRouter().router
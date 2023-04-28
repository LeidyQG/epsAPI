import { Router,Request,Response } from 'express'
import FormularioController from '../controllers/FormularioController'

class FormularioRouter{

    router=Router()
    miFormularioController:FormularioController

    constructor(){
        this.router=Router()
        this.miFormularioController= new FormularioController()
        this.routes()
    }

    private routes(){
        this.router.get('/formulario/:formulario', //  /: le dice a express que luego del / se agregará una varibale que cabia la URL
        (req:Request,res:Response)=>{
            this.miFormularioController.obtenerDefinicion(req,res)
        })
    }
}

export default new FormularioRouter().router
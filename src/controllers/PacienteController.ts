import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'   

/**
 * Controller de la funcionalidad de registro y listado de pacientes, se define una clase principal en la cual se
 * obtendrá el listado de pacientes , se utiliza el ORM prisma y Mariadb
 * Cuenta con dos métodos: Get y Post
 */

class PacienteController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    async obtenerPacientes (req:Request, res:Response){
        try {
            const pacientes= await this.prismaClient.paciente.findMany()
            res.json(pacientes)
        } catch (error) {
            console.log('ocurró un error',error)
            res.status(503)
            res.json({error:'Service Unvaliable'})
        }


    }


    async crearPaciente(req:Request, res:Response){								
        try{
            const{
                cedula,
                nombre,
                apellido,
                edad,
                telefono
            }= req.body
            
            const paciente= await this.prismaClient.paciente.create(
                {
                    data:{
                        cedula,
                        nombre,
                        apellido,
                        edad,
                        telefono
                    }
                }
            )
        
            res.json(paciente)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async obtenerPaciente(req:Request, res:Response){
        const {cedula}=req.params
        try {
            const paciente= await this.prismaClient.paciente.findMany(
                {where:{
                    cedula:parseInt(cedula)
                }}
            )
            res.json(paciente)
        } catch (error) {
            
        }

    }

    async eliminarPaciente(req:Request, res:Response){		
        const {cedula}=req.params
        try {
            const paciente= await this.prismaClient.paciente.delete(
                {where:{
                    cedula:parseInt(cedula)
                }}
            )
            res.json(paciente)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async actualizarPaciente(req:Request, res:Response){
        		
        const {Cedula}=req.params
        const cedula=parseInt(Cedula)
        const {nombre}=req.body
        const {apellido}=req.body
        const {edad}=req.body
        const {telefono}=req.body
        try {
            const medico= await this.prismaClient.paciente.update(
                {where:{
                    cedula:parseInt(Cedula)
                },
                data:{
                    cedula:cedula,
                    nombre:nombre,
                    apellido:apellido,
                    edad:edad,
                    telefono:telefono
            }
                }    
            )
            res.json(medico)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }
}


export default PacienteController
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
        const pacientes= await this.prismaClient.paciente.findMany()
        res.json(pacientes)
    }


    async crearPaciente(req:Request, res:Response){								
        try{
            const{
                cedula,
                nombre,
                apellido,
                fecha,
                telefono
            }= req.body
            
            const fechaNacimiento= new Date(fecha)
            const paciente= await this.prismaClient.paciente.create(
                {
                    data:{
                        cedula,
                        nombre,
                        apellido,
                        fechaNacimiento,
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
}


export default PacienteController
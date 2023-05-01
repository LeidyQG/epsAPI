import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad de registro y listado de médicos, se define una clase principal en la cual se
 * obtendrá el listado de médicos , se utiliza el ORM prisma y Mariadb
 * Cuenta con dos métodos: Get y Post
 */
class MedicoController{

    private prisma:PrismaClient
    prismaClient: any

    constructor(){
        this.prisma=new PrismaClient()
    }

    async obtenerMedicos(req:Request, res:Response){
        const medicos= await this.prisma.medico.findMany()
        res.json(medicos)
    }

    async crearMedico(req:Request, res:Response){								
        try{
            const{
                tarjetaProfesional,
                nombre,
                apellido,
                consultorio,
                correo,
                Especialidad
            }= req.body
            
            const medico= await this.prismaClient.paciente.create(
                {
                    data:{
                        tarjetaProfesional,
                        nombre,
                        apellido,
                        consultorio,
                        correo,
                        Especialidad
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

export default MedicoController
import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad citas, se define una clase principal en la cual se
 * obtendrá el listado de citas por paciente, se utiliza el ORM prisma y Mariadb
 * Sólo cuenta con un método get
 */
class CitaController{

    private prisma:PrismaClient
    prismaClient: any

    constructor(){
        this.prisma=new PrismaClient()
    }

    async obtenerCitas(req:Request, res:Response){
        const citas= await this.prisma.cita.findMany()
        res.json(citas)
    }

    async crearCita(req:Request, res:Response){								
        try{
            const{
                idCita,
                fecha,
                Paciente,
                pacienteCedula,
                Medico,
                medicoTarjetaProfesional
            }= req.body
            
            const cita= await this.prismaClient.paciente.create(
                {
                    data:{
                        idCita,
                        fecha,
                        Paciente,
                        pacienteCedula,
                        Medico,
                        medicoTarjetaProfesional
                    }
                }
            )
        
            res.json(cita)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

}

export default CitaController
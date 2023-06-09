import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad citas, se define una clase principal en la cual se
 * obtendrá el listado de citas por paciente, se utiliza el ORM prisma y Mariadb
 * Sólo cuenta con un método get
 */
class CitaController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient=new PrismaClient()
    }

    async obtenerCita(req:Request, res:Response){
        const {cedula}=req.params
        try {
            const citas= await this.prismaClient.cita.findMany({
                where:{
                    pacienteCedula:parseInt(cedula)
                }
            }

            )
            res.json(citas)    
        } catch (error) {
            
        }

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
            
            const cita= await this.prismaClient.cita.create(
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

    async actualizarCita(req:Request, res:Response){
        		
        const {Cedula}=req.params
        const {idCita}=req.body
        const {fecha}=req.body
        const {pacienteCedula}=req.body
        const {medicoTarjetaProfesional}=req.body
        try {
            const cita= await this.prismaClient.cita.update(
                {where:{
                    idCita:parseInt(Cedula)
                },
                data:{
                    idCita:idCita,
                    fecha:fecha,
                    pacienteCedula:pacienteCedula,
                    medicoTarjetaProfesional:medicoTarjetaProfesional
            }
                }    
            )
            res.json(cita)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async eliminarCita(req:Request, res:Response){		
        const {cedula}=req.params
        try {
            const cita= await this.prismaClient.cita.delete(
                {where:{
                    idCita:parseInt(cedula)
                }}
            )
            res.json(cita)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async obtenerCitas(req:Request, res:Response){
        const {cedula}=req.params
        try {
            const citas= await this.prismaClient.cita.findMany()
            res.json(citas)    
        } catch (error) {
            
        }

    }

}

export default CitaController
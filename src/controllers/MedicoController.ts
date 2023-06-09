import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad de registro y listado de médicos, se define una clase principal en la cual se
 * obtendrá el listado de médicos , se utiliza el ORM prisma y Mariadb
 * Cuenta con dos métodos: Get y Post
 */
class MedicoController{

    private prismaClient:PrismaClient


    constructor(){
        this.prismaClient=new PrismaClient()
    }

    async obtenerMedicos(req:Request, res:Response){
        try {
            const medicos= await this.prismaClient.medico.findMany()
            res.json(medicos)
        } catch (error) {
            
        }

    }

    async crearMedico(req:Request, res:Response){								
        try{
            const{
                tarjetaProfesional,
                nombre,
                apellido,
                consultorio,
                correo,
                Especialidad,
                idEspecialidad
            }= req.body
            
            const medico= await this.prismaClient.medico.create(
                {
                    data:{
                        tarjetaProfesional,
                        nombre,
                        apellido,
                        consultorio,
                        correo,
                        Especialidad,
                        idEspecialidad
                    }
                }
            )
        
            res.json(medico)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async eliminarMedico(req:Request, res:Response){		
        const {tarjeta}=req.params
        try {
            const medico= await this.prismaClient.medico.delete(
                {where:{
                    tarjetaProfesional:parseInt(tarjeta)
                }}
            )
            res.json(medico)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
    }

    async obtenerMedico(req:Request, res:Response){
        const {tarjeta}=req.params
        try {
            const medicos= await this.prismaClient.medico.findMany(
                {where:{
                    tarjetaProfesional:parseInt(tarjeta)
                }}
            )
            res.json(medicos)
        } catch (error) {
            
        }

    }

    async actualizarMedico(req:Request, res:Response){
        		
        const {tarjeta}=req.params
        const tarjetaProfesional=parseInt(tarjeta)
        const {nombre}=req.body
        const {apellido}=req.body
        const {consultorio}=req.body
        const {correo}=req.body
        const {Especialidad}=req.body
        const {idEspecialidad}=req.body
        try {
            const medico= await this.prismaClient.medico.update(
                {where:{
                    tarjetaProfesional:parseInt(tarjeta)
                },
                data:{
                    tarjetaProfesional:tarjetaProfesional,
                    nombre:nombre,
                    apellido:apellido,
                    consultorio:consultorio,
                    correo:correo,
                    Especialidad:Especialidad,
                    idEspecialidad:idEspecialidad
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
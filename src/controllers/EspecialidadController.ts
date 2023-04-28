import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'


class EspecialidadController{

    private prisma:PrismaClient

    constructor(){
        this.prisma=new PrismaClient()
    }

    async obtenerEspecialidades(req:Request, res:Response){
        const especialidades= await this.prisma.especialidad.findMany()
        res.json(especialidades)
    }

}

export default EspecialidadController
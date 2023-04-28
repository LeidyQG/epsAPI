import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'


class CitaController{

    private prisma:PrismaClient

    constructor(){
        this.prisma=new PrismaClient()
    }

    async obtenerCitas(req:Request, res:Response){
        const citas= await this.prisma.cita.findMany()
        res.json(citas)
    }

}

export default CitaController
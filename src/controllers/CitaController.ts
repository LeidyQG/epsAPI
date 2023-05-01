import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad citas, se define una clase principal en la cual se
 * obtendrá el listado de citas por paciente, se utiliza el ORM prisma y Mariadb
 * Sólo cuenta con un método get
 */
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
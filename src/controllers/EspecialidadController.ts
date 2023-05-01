import {Request, Response} from 'express'

import { PrismaClient } from '@prisma/client'

/**
 * Controller de la funcionalidad de especialidades, se define una clase principal en la cual se
 * obtendrá el listado de especialidades, se utiliza el ORM prisma y Mariadb
 * Sólo cuenta con un método get
 */
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
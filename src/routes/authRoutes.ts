import express, {Router,Request, Response} from "express"
import { Prisma, PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
const router:Router= Router()



router.get(

    
    '/auth/:id',
    async (req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        const username= req.params.username
        const prisma:PrismaClient=new PrismaClient
        try {
            const user = await prisma.paciente.findFirst({
                where: { cedula: { equals: id} , nombre: {equals: username}}
            })

            if(!user){
                res.status(400).json({ message: "La cédula no existe" })
            }else{
                const payload = {
                    id:user.cedula,
                    username:user.nombre
                }

                const options={
                    expiresIn : "1h"
                }

                const secretKey = process.env.SECRET_KEY

                if(typeof secretKey == "string"){
                    const token =jwt.sign(payload,secretKey,options)
                    return res.status(201).json({ message: "Creado exitosamente", token})   
                }   
            }

        } catch (error) {
            res.status(400).json({ message: "Revise la cédula, la introducida no exite" })
            console.log(error)
        } 
    }

)






export default router

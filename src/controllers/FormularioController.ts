import { Request,Response } from 'express'
import * as jsonSchema from '../json-schema.json'



type JsonSchema = Record < string,any> //Crea un nuevo tipo de dato, Record define qué tipo de datos va a recibir


class FormularioController{

    obtenerDefinicion(req:Request,res:Response){

        const {formulario}=req.params
        const miEsquema: JsonSchema=jsonSchema
        if (miEsquema.definitions[formulario]){
            res.json(miEsquema.definitions[formulario])
        }else{
            res.status(400)
            res.json({eror:`No se encontró el formulario ${formulario}`})
        }
    }
}

export default FormularioController


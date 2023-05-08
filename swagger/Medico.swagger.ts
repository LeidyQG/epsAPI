export default {
    /**
     * 
     * @swagger
     * 
     * /medico:
     *  post:
            summary: Registrar un médico en la base de datos
            description: Se ha registrado exitosamente un médico en la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos del médico
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en el registro del médico
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
        /medico:
        get:
            summary: Obtener el listado de los médicos que se encuentren en la base de datos
            description: Has obtenido el listado de los médicos provenientes de la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos del médico
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en la obtención de médicos
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
     */
    }
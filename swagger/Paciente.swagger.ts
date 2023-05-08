export default {
    /**
     * 
     * @swagger
     * 
     * /paciente:
     *  post:
            summary: Registrar un paciente en la base de datos
            description: Se ha registrado exitosamente un paciente en la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos del paciente
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en el registro del paciente
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
        /paciente:
        get:
            summary: Obtener el listado de los pacientes que se encuentren en la base de datos
            description: Has obtenido el listado de los pacientes provenientes de la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos del paciente
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en la obtención de pacientes
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
     */
    }
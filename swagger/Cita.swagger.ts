export default {
    /**
     * 
     * @swagger
     * 
     * 
        /citas:
        get:
            summary: Obtener el listado de las citas que se encuentren en la base de datos según el paciente
            description: Has obtenido el listado de las citas provenientes de la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos de las citas según paciente
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en la obtención de las citas según paciente
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
     */
    }
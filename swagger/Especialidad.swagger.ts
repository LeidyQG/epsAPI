export default {
    /**
     * 
     * @swagger
     * 
     * 
        /especialidad:
        get:
            summary: Obtener el listado de las especialidades que se encuentren en la base de datos
            description: Has obtenido el listado de las especialidades provenientes de la base de datos
            responses:
                200:
                    description: Un arreglo JSON con los datos de la especialidad
                    content:
                        application/json:
                        schema:
                            type: array
                            items:
                                type: array
                    example: 
                404:
                    description: Error en la obtención de las especialidades
                    content:
                    schema:
                        type: array
                    example: "Se produjo un error"
     * 
     */
    }
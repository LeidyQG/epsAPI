export default {
    /**
     * 
     * @swagger
     * 
     * 
        /formulario/:formulario:
        get:
            summary: Obtener el formulario deseado según la URL
            description: Has obtenido el formulario correcto según la URl
            responses:
                200:
                    description: Un formulario HTML con los campos correspondientes
                    content:
                        application/html:
                        schema:
                            type: form
                            items:
                                type: objects html
                    example: 
                404:
                    description: Error en la obtención del formulario según URL
                    content:
                    schema:
                        type: form
                    example: "No se encontró el formulario"
     * 
     */
    }
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'
import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'
import CitaRoutes from './routes/Cita.routes'
import EspecialidadRoutes from './routes/Especialidad.routes'
import FormularioRoutes from './routes/Formulario.routes'
import cors from 'cors'


/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Leidy Quiñones
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */

//Para usar el typedoc; npx typedoc --entryPointStrategy expand ./src   (Lugar de la documentación )
class App{

	public app:Application
	private server:any

	constructor(){
		this.app=express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs', //Donde se publicará la documentación
			swaggerUi.serve, //En qué servidor
			swaggerUi.setup(swaggerSpec) //La configuración que usará
		)
		this.app.use(cors())
		this.routes()
	}

	/**
	 * Definir y agregar las rutas de la Api con express
	 */
	private routes():void{
        this.app.use('/', PacienteRouter)
		this.app.use('/', MedicoRouter)
		this.app.use('/', CitaRoutes)
		this.app.use('/',EspecialidadRoutes)
		this.app.use('/',FormularioRoutes)
		
	}

	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App

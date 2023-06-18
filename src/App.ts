import swaggerUi from 'swagger-ui-express'
import express,{Application, Request, Response} from 'express'
import passport from "passport"
import dotenv from 'dotenv'
dotenv.config()
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
 * @description Clase principal de la API que gestiona la EPS
 */

//Para usar el typedoc; npx typedoc --entryPointStrategy expand ./src   (Lugar de la documentación )
class App{

	public app:Application
	private server:any

	constructor(){
		this.app=express()
		this.app.use(express.json())
		this.app.use(cors())
		this.routes()
		/*this.app.use('/auth',rutas_auth)
		passport.use(miEstrategia)
		this.app.use(passport.initialize()) 
		this.app.use('/',passport.authenticate('jwt',{session:false}) ,PacienteRouter)
		this.app.use('/',passport.authenticate('jwt',{session:false}) ,CitaRoutes)*/
	}

		
	/**
	 * Rutas que usa la API cada una para una funcionalidad diferente donde tienen routers y controllers independientes
	 */
	private routes():void{
        this.app.use('/', PacienteRouter)
		this.app.use('/', MedicoRouter)
		this.app.use('/', CitaRoutes)
		this.app.use('/',EspecialidadRoutes)
		this.app.use('/',FormularioRoutes)
		
	}

	configurarCORS(req:Request,res:Response,next:any){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","GET, POST");
        res.header("Access-Control-Allow-Headers","Content-Type");
        next();
    }
	/**
	 * Método para la iniciación del servidor, Aunque se define un método de apagado de servidor,
	 * se utiliza la biblioteca nodemon para automatizar el enciendido y apagado del servidor
	 */
	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	/**
	 * Método para apagar el servidor, tenga en cuenta el uso de la biblioteca nodemon para su automatización
	 */
	public close():void{
		this.server.close()
	}

}

export default App

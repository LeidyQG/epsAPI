import express, {Application, Request, Response} from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

/**
 * Clase principal de la APi, define las rutas de la API
 * 
 * @author Leidy Quiñones
 * @description Clase inical de ejemplo para la creación de rutas y documentación
 */

//Para usar el typedoc; npx typedoc --entryPointStrategy expand ./src   (Lugar de la documentación )
class App{

	public app:Application
	private server:any

	constructor(){
		this.app=express()
		this.app.use(express.json())
		this.routes()
		this.app.use(
			'/api-docs', //Donde se publicará la documentación
			swaggerUi.serve, //En qué servidor
			swaggerUi.setup(swaggerSpec) //La configuración que usará
		)
	}

	private routes():void{
		this.app.get(
			'/',(req:Request, res:Response)=>{res.send('bienvenido a TypeScript')}
		)

		this.app.post(
			'/paciente',(req:Request, res:Response)=>{res.send('bienvenido a TypeScript')}
		)
	}

	public start():void{
		this.server=this.app.listen(3000,()=>{console.log('El servidor está escuchando en el puerto 3000')})
	}

	public close():void{
		this.server.close()
	}
}

export default App
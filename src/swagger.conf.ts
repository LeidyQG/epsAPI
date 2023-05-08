import swaggerJSDoc from 'swagger-jsdoc' //Importar biblioteca de Swagger

export const swaggerOptions={
	definition:{
		openapi:'3.0.0',
		info:{
			title:'Api de la Ips de Atenea',
			version:'1.0.0',
			description:'En esta API tenemos la funcionalidad que soporta la administración de la Ips Atenea'
		},
		servers:[
			{url:'http://localhost:3000', 
				description:'Servidor local de documentación'}
		]//Lista de servidores a usar
	},

	apis:['src/index.ts','./swagger/*.swagger.ts'] //Rutas de los archivos que usarán swagger
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)
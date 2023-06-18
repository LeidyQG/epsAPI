import request from 'supertest'
import {describe, expect, it, beforeAll, afterAll} from '@jest/globals'
import App from '../src/App'
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();


describe('Pruebas de la ruta de la API', () => {
  
    let app:App 
    
    beforeAll(
        ()=>{
            app=new App()
            app.start()
        }
    )

    afterAll(
      async () => {await prisma.$disconnect();
      app.close()
    });
    
  //Test de ruta que crea pacientes
  it('Debería responder con el código 200 y un JSON con los datos creados', async () => {
    const medico={
      "tarjetaProfesional":4637584,
      "nombre":"Rosalba",
      "apellido":"Diaz",
      "consultorio":"302",
      "correo":"Pamela@doc.edu",
      "Especialidad":"MEDICINA GENERAL",
      "idEspecialidad":1
    }
    
    const response = await request(app.app).post('/crear_medico').send(medico);
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({
      tarjetaProfesional:medico.tarjetaProfesional,
      nombre:medico.nombre,
      apellido:medico.apellido,
      consultorio:medico.consultorio,
      correo:medico.correo,
      Especialidad:medico.Especialidad,
      idEspecialidad:medico.idEspecialidad
    });
  });

  //Test de la ruta que consulta los pacientes
  it('Debería responder con el código 200 y un JSON con los datos consultados', async () => {
    
    const response = await request(app.app).get('/medicos');
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});


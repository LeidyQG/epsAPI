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
    const paciente={
      "cedula":374345,
      "nombre":"Daniela",
      "apellido":"Monroy",
      "edad":5,
      "telefono":"+573003747"
    }
    
    const response = await request(app.app).post('/crear_paciente').send(paciente);
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({
      cedula:paciente.cedula,
      nombre:paciente.nombre,
      apellido:paciente.apellido,
      edad:paciente.edad,
      telefono:paciente.telefono
    });
  });

  //Test de la ruta que consulta los pacientes
  it('Debería responder con el código 200 y un JSON con los datos consultados', async () => {
    
    const response = await request(app.app).get('/pacientes');
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});


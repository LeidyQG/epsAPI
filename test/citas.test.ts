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
    const cita={
      "idCita":3747,
      "fecha":"2023-12-24T07:15:30.451Z",
      "pacienteCedula":9838284,
      "medicoTarjetaProfesional":123456
    }
    
    const response = await request(app.app).post('/crear_cita').send(cita);
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({
      idCita:cita.idCita,
      fecha:cita.fecha,
      pacienteCedula:cita.pacienteCedula,
      medicoTarjetaProfesional:cita.medicoTarjetaProfesional
    });
  });

  //Test de la ruta que consulta los pacientes
  it('Debería responder con el código 200 y un JSON con los datos consultados', async () => {
    
    const response = await request(app.app).get('/citas');
    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});


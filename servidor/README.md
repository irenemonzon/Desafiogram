# Frontend

Esta carpeta contiene el código para el backend de Desafiogram.

### Pasos para ejecutar el backend

- Revisa que MongoDB este encendido
- Instala las dependencias: `npm install`
- Llena la base de datos de data: `npm run seed-db`
- Enciende el backend `npm run dev`

Para probarlo se debe ejecutar:
localhost:3000/api/posts

Y debiese devolver todos los posts de la base de datos creados por "run seed-db"

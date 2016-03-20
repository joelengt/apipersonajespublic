# ApiPersonajesPublic v0.0.1
API REST FULL Publico(CORS habilitados, cualquier cominio, peticiones CRUD). Crear tus Personajes favoritos y puntualos con amigos. Toda la documentación de la data y manipulación create, edit, delete, update: 
en [http://apipersonajes.herokuapp.com](http://apipersonajes.herokuapp.com) , creado en Nodejs, Express, MondoDB, Socket.io + Demo en Frontend con el API usando JS, AJAX. 

##Uso del API
Toda la documentación y demo del API: [http://apipersonajes.herokuapp.com/](http://apipersonajes.herokuapp.com)

##Descarga/Clone
Para usarlo primero lo bajamos de github a nuestro computador
```
https://github.com/joelengt/apipersonajespublic.git
```
##Instalación
Para Iniciar el App, se require información del archivo config.js, el cual fue eliminado por seguridad. Puedes crear uno similar:
llamado config.js , solo incluir dentro la siguiente data:

```
var config = {
	mongodb: {
		local: 'mongodb://localhost/personajes_api',
		mlab: 'url connect mongodb'
	}
}

module.exports = config
```

Para iniciar debes tener instalado [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.org/downloads), en tu Sistema Operativo. Al tener todo, nos ubicamos en la carpeta donde guardamos la app, mediante la terminal/consola. Una vez alli ejecutar:
```
npm install
```
Con este comando bajamos todas las depentencias y modulos de la app.

##Iniciar/Start
Nuestra App usa mongoDB, con un modulo mongoose. Necesita conectarse localmente en su sistema operativo.
En una consola nueva ejecutar 
```
mongod
```
*Dependiendo a los permisos de acceso path al instalar mongodb en su ordenador, puede ejecutarlo donde desee, o en donde lo instalo.

Luego, en nuestra primera consola, cuando todo descargo:
```
npm start
``````
Con esto ya aplicación correra automaticamente en el puerto 4000:
```
http://localhost:4000
```
En todo caso puede correrlo en otro puerto:
```
PORT=4391 node index.js
```
##Desarrollo
El API esta en forma de Model, View, Controller, Routes, con Express.
La  Aplicación aun esta en desarrollo, a nuevas funcionabilidades

##Permisos
MIT

Copyright (c) 2016 Joel Gonzales Tipismana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

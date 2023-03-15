# api-mysql-mongoDB
-----

☞ Proyecto creado con las siquientes tecnologias: 

1. *MongoAtlas (uso de cluster)*
   1.  Cluster : Servidor especializado para mongo al cual me conecto desde mi API, lo que me permite tener la BBDD en la nube y despliego el proyecto en el servidor donde la BBDD esta en la nube
2. *Mongoose*
3. *express*
4. *node*
5. *cors*
6. *dotenv* (para variables de entorno)
7. *multer* 
   1. Para manejar la subida al servidor de carga de archivos a la BBDD almacenamiento, carga de archivos. 
   2. Funciona como un middleware entre la ruta y el controlador

8. *Paquete 'express-validator'*: 
   1. paquete que funciona como middleware  en el cual se encarga de hacer un filtro de que la data llegue al controlador de manera 'curada'

9.  Libreria *'JWT'* 
    1.  Para implementar las firmas, las codificaciones, verificaciones

10. Libreria *'bcrypt.js'*: 
    1.  No tiene relacion con el JWT sino que realiza un hash de nuestra clave y lo guarda en nuestra BBDD. 
    2.  Se relaciona con el concepto de autentizacion, Auth


11. *Sistema de monitorizacion de errores ☞ Slack*:
    
        npm i @slack/webhook@6.1.0 -S 
    1.  Permite conectar al webhook de slack
    2.  Podemos usar alguna aplicacion para poder monitorizar los errores o algo que me llame la atencion. 
    3.  Puedo usar la aplicaciond de slack para que me envie los errores a mi mail
    4.  Instalamos paquete que nos va a ayudar a interceptar todas las peticiones que se realizan en nuestra APP. 
    5.  Nos ayuda a estar al pendiente de las respuestas de nuestra api, los datos de entrada y poder filtrar basado en el codigo de encabezado de la peticion http (codigos 200, 400, 300)
    6.  Permite un monitreo en tiempo real de quellas cosas que ocurren en la app (errores, ataques de penetracion, usuario que intenta mucho una clave erronea)

12. *morgan - body*
    1.  LINK ➡️ https://www.npmjs.com/package/morgan-body

13. Libreria *sequelize*: 
    1.  Es una ORM ☞ libreria que te facilita la implementcion de los query para que se conecten a cierto motor de una ddbb
    2.  Funciona con muchos de BBDD
    3.  Link ➡️ https://sequelize.org/
---
***Posee el siguiente modelo de vista de controlador:*** 💻 

* scaffold: Estructura de carpetas que vamos a user en el proyecto.
* storage: almacenamiento de documentos
* utils: utilidades o helpers donde tengo que ayudarme con cambios o acciones repetitivas
* routes: que serian ese punto de acceso de mi API donde voy a devolver objetos o una propiedad en formato .JSON 

* Gestor de BBDD NO relacional: Mongo. Paquete de node que es mongoose (nos permite conectar con nuestra BBDD de mongo). El gestor de BBDD es -> _STUDIO 3T.APP_

* Gestor de BBDD Relacional: _Sequelize_

* Carpeta controllers:
  - contener la logica de la app
  - donde finaliza el usuario
  - donde coenctaremos a la BBDD
  - donde sumamos y hacemos modificaciones
  - CRUD


---
#### **Patron MVC = MODELO VISTA CONTROLADOR** 
ℹ️ Estructura del dato que va a existir en la BBDD, ejemplo : coleccion de datos, como van a estar estructurados esos datos. Se creara un modelo por cada una de las colecciones o "tablas" que vamos a usar.

➡️ _Models > nosql (modelos relacionados con Mongo)_

➡️ _Models > sql (modelos relacionados con sql)_

---
## ▶︎ Conceptos importantes: ◀︎

➡️ ***PAYLOAD***: La carga útil​ (payload en inglés) es el conjunto de datos transmitidos, es el mensaje o metadatos, que son enviados simplemente para facilitar la entrega del mensaje.

    ➤ Que es lo que queremos transmitir ?

➡️ ***JWT - Auth***:
  - Metodo de autorizacion entre un front y el backend (node y express)
  - Metodo o forma de autorizacion entre ambas partes(front y back)
  - JWT: cadena texto / string, que llama al encriptado, compuesto por 3 secciones:
1. _Roja_: 
   1. tipo de encriptacion o algoritmo que se uso para encriptar esto
2. _Rosa_: 
   1. payload carga util normalmente se usa el nombre y el ID del usuario, pero NO data sensible
3. _Celeste:_ 
   1. Es la firma


➡️ *El hash es la verison encriptada de un String, es la version encriptada de nuestra contraseña*

---
---
## English version

☞ Project created by he following technologies: 

1. *MongoAtlas (use of cluster)* 2.
   1. Cluster : Specialized server for mongo to which I connect from my API, which allows me to have the DB in the cloud and I deploy the project on the server where the DB is in the cloud.
2. *Mongoose*
3. *express*
4. *node*.
5. *cors*.
6. *dotenv* ( for environment variables)
7. *multer* (for environment variables) 7. 
   1. To handle the upload to the server for uploading files to the DB storage, file upload. 
   2. Functions as a middleware between the route and the driver.

8. *Package 'express-validator'*: 
   1. package that works as middleware in which it is in charge of making a filter that the data arrives to the controller in a 'curated' way.

9.  Library *'JWT'*: 1. 
    1. To implement the signatures, the encodings, verifications.

10. Library *'bcrypt.js'*: 
    1. It is not related to the JWT but performs a hash of our key and stores it in our DB. 
    2. It is related to the concept of authentication, Auth.


11. *Error monitoring system ☞ Slack:*
    
        npm i @slack/webhook@6.1.0 -S 

    1. Allows to connect to the slack webhook.
    2. We can use some application to be able to monitor errors or something that catches my attention. 
    3.  We install a package that will help us to intercept all the requests that are made in our APP. 
    4.  It helps us to be aware of the responses of our api, the input data and to be able to filter based on the http request header code (codes 200, 400, 300).
    5.  Allows a real time monitoring of those things that happen in the app (errors, penetration attacks, user that tries a lot of wrong key).

12. *morgan - body*
    1.  LINK ➡️ https://www.npmjs.com/package/morgan-body

13. Library *sequelize*: 
    1.  It is an ORM -> library that makes it easy for you to implement queries to connect to a certain ddbb engine.
    2. It works with many ddbb's.
    3.  Link ➡️ https://sequelize.org/
---
***Model-View-Controller (MVC):*** 💻 

* scaffold: structure of folders that we are going to use in the project.
* storage: document storage
* utils: utilities or helpers where I have to help me with changes or repetitive actions.
* routes: that would be that access point of my API where I am going to return objects or a property in .JSON format. 

* NON-relational DDBB manager: Mongo. Node package which is mongoose (it allows us to connect to our mongo DB). The DDBB manager is -> _STUDIO 3T.APP_.

* Relational DDBB manager: _Sequelize_.

* Controllers folder:
  - contain the logic of the app
  - where the user ends
  - where we will connect to the database
  - where we add and make modifications
  - CRUD

---
***MVC Pattern = MODEL CONTROLLER VIEW***

ℹ️ Structure of the data that is going to exist in the DB, example: data collection, how this data is going to be structured. A model will be created for each one of the collections or "tables" that we are going to use.

➡️ _Models > nosql (Mongo-related models)_

➡️ _Models > sql (sql related models)_

---
## ▶︎ Important concepts: ◀︎

➡️ ***PAYLOAD***: The payload is the set of transmitted data, that is the message or metadata, which is sent simply to facilitate the delivery of the message.

    ➤ What do we want to transmit ?

➡️ ***JWT - Auth***:
  - Authorization method between a frontend and backend (node and express).
  - Authorization method or form of authorization between both parties (front and back).
  - JWT = text string / string, which calls the encryption, composed of 3 sections:
1. _Red_: 
   Encryption type or algorithm used to encrypt this 2.
2. _Pink_: 
   1. payload payload normally the user's name and ID is used, but NOT sensitive data 3.
3. _LigthBlue:_ 
   1. It is the signature


➡️ *The hash is the encrypted verification of a String, it is the encrypted version of our password*.
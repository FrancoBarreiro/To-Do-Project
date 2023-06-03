# To-Do-Project 

|| Leer hasta el final ||

La aplicación permite a los usuarios agregar tareas categorizadas como "Personal" o "Trabajo".
El backend de la aplicación está desarrollado en Java con el framework Spring Boot y utiliza una base de datos PostgreSQL
que se ejecuta dentro de un contenedor Docker.

Si deseas probar su funcionamiento sigue los pasos a continuación para configurar correctamente la base de datos.

Configuración del Backend:
Para ejecutar el servidor backend y conectarlo a la base de datos PostgreSQL, sigue estos pasos:

1) Debes tener Docker instalado en tu sistema. Si no lo tienes instalado, puedes descargarlo desde el sitio web oficial: https://www.docker.com/get-started

2) Clona el repositorio desde GitHub a tu compu.

3) Busca dentro de la carpeta BackEnd el archivo docker-compose.yml.

4) Abre una terminal o símbolo del sistema y ejecuta el siguiente comando para iniciar el contenedor PostgreSQL:

      docker-compose up -d
      Este comando descargará la imagen de PostgreSQL necesaria si no está presente en tu sistema y comenzará un contenedor con la configuración requerida.

5) Una vez que el contenedor esté en funcionamiento, puedes iniciar el servidor backend utilizando el IDE que prefieras.

6) El servidor backend debería ser accesible en http://localhost:8080. Puedes probar la API utilizando herramientas como Postman, sin embargo para que no
sea haga tedioso el proceso de prueba he considerado realizar un frontend para facilitar su uso. A continuación puedes configurarlo si asi lo quieres.

Configuración del Frontend:
Para ejecutar el frontend de la aplicación, que está desarrollado en Angular, sigue estos pasos:

1) Debes tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos desde el sitio web oficial: https://nodejs.org

2) Busca la caperta "FrontEnd" y abre una terminal o símbolo del sistema y ejecuta el siguiente comando para instalar las dependencias necesarias:
      npm install
Este comando descargará e instalará todos los paquetes y dependencias necesarios para el frontend.

3) Después de que se complete la instalación, ejecuta el siguiente comando para iniciar el servidor frontend:
      ng serve
Este comando compilará la aplicación Angular y iniciará el servidor de desarrollo.

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación abriendo un navegador web y visitando la siguiente URL http://localhost:4200.

<<<<< Notas adicionales >>>>>
Al interactuar con el frontend, puedes ver los valores que el atributo "estado" puede recibir en el código.
Estos valores son: { "Pendiente", "En proceso", "Completada" }.
Sin embargo, internamente en el código, estos valores se mapean al inglés, ya que todo el código fue realizado en inglés.
Debes ingresar el valor exacto en el campo correspondiente, ya que si ingresas cualquier otro valor no se ejecute correctamente.
Lo ideal sería utilizar un elemento HTML como <select> en lugar de un campo de texto, esto permitiría al usuario seleccionar una opción válida de manera
más sencilla y se evitarian errores, de todas formas he priorizado continuar con otros proyectos para enriquecer mis conocimientos en el sector backend.
  
Si llegaste hasta aqui, te agradezco sinceramente por tu tiempo.
¡Espero que encuentres valor en este proyecto y toda critica constructiva que quieras brindar será bienvenida!
¡Estoy abierto a escuchar tus comentarios y sugerencias!

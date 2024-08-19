# Frontend React - Proyecto de Prueba Técnica
Este repositorio contiene la parte frontend de un proyecto de prueba técnica desarrollado con React. Este proyecto se conecta con un backend que puedes encontrar en https://github.com/lihuesom/stockFusion. Para ver las funcionalidades completas, asegúrate de clonar también el repositorio del backend.

## Requisitos
* Node.js versión 14
* nvm (Node Version Manager)

## Configuración del Entorno
1. #### Instalar nvm

Si aún no tienes nvm instalado, puedes seguir las instrucciones en nvm-sh/nvm.

2. #### Instalar Node.js versión 14

Una vez que nvm esté instalado, usa el siguiente comando para instalar y usar Node.js versión 14:

```bash
nvm install 14
nvm use 14

```
3. #### Clonar el Repositorio
Clona este repositorio en tu máquina local:

```bash
git https://github.com/lihuesom/stockFusionFront.git
cd stockFusionFront
```
También necesitarás clonar el repositorio del backend para probar la integración:

```bash
git clone https://github.com/lihuesom/stockFusion
cd stockFusion
```
4. #### Instalar Dependencias

En el directorio del proyecto frontend, instala las dependencias con:

```bash
npm install
```
5. #### Ejecutar el Proyecto
Para iniciar el servidor de desarrollo, usa el siguiente comando:

```bash
npm start
```
Esto abrirá el proyecto en tu navegador en http://localhost:3000.

## Estructura del Proyecto
* src/ - Contiene el código fuente del proyecto.
* app/ - Componentes principales, servicios, y vistas.
* App.tsx - Componente principal de la aplicación.
* index.tsx - Punto de entrada de la aplicación.

## Contribuciones
Si deseas contribuir a este proyecto, por favor sigue las prácticas de Git y envía un Pull Request con tus cambios.

## License
[MIT](https://choosealicense.com/licenses/mit/)
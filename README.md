# consumo-api-SVVA

Primero creamos el proyecto

![image](https://github.com/user-attachments/assets/f25b3d71-d00e-40b6-a982-72bf502f9623)

Posteriormente creamos el servicio donde obtendremos la información de la api de usuarios
![image](https://github.com/user-attachments/assets/8fca5bee-9e5a-4bc9-adfc-c25d0ce91042)

y agregamos el código proporcionado en la práctica por la profesora
![image](https://github.com/user-attachments/assets/cf6b5999-aed7-468d-991c-8491a594b9b0)

Finalmente creamos el componente donde mostraremos la información de los usuarios en forma de tabla
![image](https://github.com/user-attachments/assets/91b0f709-9cc3-41dd-a342-aa1075f4fecb)

en el archivo typescript ponemos el siguiente código para recuperar la información del servicio
![image](https://github.com/user-attachments/assets/5b25652a-9118-439e-b8a1-a58d24bb946e)

instalamos la siguiente biblioteca para integrar paginación y la importamos
![image](https://github.com/user-attachments/assets/d7563a83-e4e8-4dca-96cd-64ac7136db05)

ahora solo debemos integrar en el html de nuestro componente una tabla que utiliza paginación para mostrar la información de los usuarios
![image](https://github.com/user-attachments/assets/07cad222-88d9-4ec8-8183-cf9d1ba6f02f)



Resultados con paginación

![image](https://github.com/user-attachments/assets/65cf7eba-4ecd-440f-a0bb-7470e8ef40d9)

PREGUNTAS

¿Qué hace el método getUsers en este servicio?
Nos devuelve una lista de objetos que devuelve el api de usuarios

¿Por qué es necesario importar HttpClientModule?
Porque nos permite la comunicación con apis

¿Qué función cumple el método ngOnInit en el componente UserListComponent?
Sirve para cargar los datos de los usuarios al iniciar el componente

¿Para qué sirve el bucle *ngFor en Angular? Explica cómo se utiliza en este ejemplo.
Nos ayuda a recorrer todos los objetos devueltos por la solicitud, en este caso usuarios

Preguntas de reflexión final:

1. ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?
   Centralizar la lógica, crear código reutilizable, y que sea fácil implementar nuevas funcionalidades
   
2. ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?
   Para que nuestro código sea modular y escalable y sea más sencillo tranajar en el
   
3. ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?
   Alguna api para autenticación, pagos, ubicaciones, lo que sea necesarios para el proyecto que se realice
   
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

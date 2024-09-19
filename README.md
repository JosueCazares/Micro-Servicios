### Micro-Servicio
### INSTALACION DE TECNOLOGIAS NECESARIAS
###### Es necesario que un su computadora instalen 
- Node.js 
- Bun 
- TypeScript
###### Para instalarlo pueden ver un tutorial en youtube de cada uno,  o en la documentacion oficial.

------------


Para instalar Bun.js solo ejecuten el comando en su terminal.
-` $npm install -g bun`

------------

###### Para poder utilizar prisma se necesita hacer una migracion cada vez que 
###### se creo una nueva version
Para hcaer una migracion se necesita el siguiente comando. 
`bunx prisma migrate dev --name==nombre`
Despues de hacer la migracion es necesario hacer un generate para poder aplicar los cambios de el squema, el comando es:
`Bunx prisma generate`
###### Y el utlimo comando basico para la ejecucion del proyecto es:
`Bun dev`
##### ESTE COMANDO DEBE SER EJECUTADO EN LA RAIZ DEL PROYECTO PARA PODER EJECUTAR EL BACK Y EL FRONT A LA VEZ

------------

PARA EL MANEJO DE ENTREGAS DE CODIGO ES RECOMENDABLE HACER UNA RAMA DIFERENTE POR CADA INTEGRANTE O TAREA DEL PROYECTO, PARA NO INTERFERIR CON LA RAMA MAIN. UNA VEZ CREADA LA RAMA AL MOMENTO DE QUERER MERGE CON LA RAMA MAIN PRIMERO SE DEBE HACER UN PULL REQUEST PARA LA CERIFICACION DE CONFLICTOS O ERRORES DE CODIGO.


const {crearArchivo}=require('./multiplicar');

const base=3;

crearArchivo(3)
    .then(res=>console.log(res))
    .catch(e=>console.log(e));
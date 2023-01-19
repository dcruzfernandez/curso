
const fs=require('fs');


const crearArchivo=(base)=>{
    return new Promise((resolve,reject)=>{
        let salida=`tabla del ${base}\n`;

        for (let i = 0; i < 11; i++) {
            salida+=(`${base} x ${i}=${base*i}\n`);
            
        }
        fs.writeFile(`tabla.txt`,salida,(e)=>{
            if(e) reject(e);
            resolve('archivo generado');
        });
    });
}

module.exports={
    crearArchivo
}
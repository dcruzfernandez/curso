const fs=require('fs');

let salida=`tabla del 2\n`;

for (let i = 0; i < 11; i++) {
    salida+=(`2 x ${i}=${2*i}\n`);
    
}
fs.writeFile(`tabla.txt`,salida,(e)=>{
    if(e) throw e;
    console.log('archivo generado');
});
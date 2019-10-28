const fs = require('fs');
var colors = require('colors');

//limite = 10 valor por defecto, ecma script 6
let listarTabla = (base, limite = 10) => {

    console.log("========================".yellow);
    console.log(`======TABLA DEL ${base}=======`.green);
    console.log("========================".yellow);
    //muestra en consola la tabla de multiplicar en base al limite
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${(base*i)} `);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ingresado no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${(base*i)} \n`;
        }


        fs.writeFile(`tablas/Tabla del ${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`Tabla_${base}.txt`)
        });

    });
}

//exportamos la funciones
module.exports = {
    crearArchivo,
    listarTabla
}
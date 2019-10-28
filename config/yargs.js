//Optimizacion yargs

//REQUIREDS: existen 3 tipos
//const fs = require('fs');

const opciones = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//si no lleva "./" es un paquete
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar', opciones)
    .help()
    .argv;

//exportaciones
module.exports = {
    argv
}
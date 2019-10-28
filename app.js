//IMPORTAMOS FUNCIONES
//destructuracion, llaves despues de un let o const

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: `, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let base = "4";

//console.log(process.argv);

//let argv2 = process.argv;
//console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];




// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${(base*i)} \n`;
// }


// fs.writeFile(`tablas/Tabla del ${base}`, data, (err) => {

//     if (err) throw err;

//     console.log(`Archivo: Tabla del ${base}.txt creado.`);
// });
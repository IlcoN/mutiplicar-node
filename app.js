const { argv } = require('./config/config')
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./mutiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
}

// console.log(base);
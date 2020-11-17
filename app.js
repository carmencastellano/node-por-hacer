// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);

        break;
    case 'listar':
        let listado = porHacer.getListado();
        // console.log(listado);
        console.log('=======Por Hacer======'.green);

        for (let tarea of listado) {

            // console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('-------------------------'.red);
        }
        console.log('====================='.green);

        // console.log('listar');
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log('actaualizar', actualizado);
        break;
    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        console.log('borrar', borrado);
        break;

    default:
        console.log('tarea no valida');
}
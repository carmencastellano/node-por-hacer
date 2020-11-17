// const opts = {
//     descripcion: {
//         alias: 'd',
//         demand: true
//     },
//     completado: {
//         alias: 'c',
//         default: false

//     }
// };


// const argv = require('yargs')
//     .command('crear', 'Crea una archivo', opts)
//     .command('actualizar', 'Actualiza el estado de una tare', opts)
//     .command('listar', 'Imprime el resultado de una tabla', opts)
//     .help()
//     .argv;
//=========================================================================


// const argv = require('yargs')
//     .command('crear', 'Crea una tarea', {
//         descripcion: {
//             alias: 'd',
//             demand: true,
//             desc: 'descripcion de la tarea por hacer'
//         }
//     })
//     .command('actualizar', 'Actualiza el estado de una tarea', {
//         descripcion: {
//             alias: 'd',
//             demand: true,
//             desc: 'descripcion de la tarea por hacer'
//         },
//         completado: {
//             alias: 'c',
//             default: true,
//             desc: 'indica si la tarea esta completada'
//         }
//     })
//     .command('borrar', 'Borra una tarea', {
//         descripcion: {
//             alias: 'd',
//             demand: true,
//             desc: 'descripcion de la tarea por hacer'
//         }
//     })
//     // .command('listar', 'Imprime el resultado de una tabla', opts)
//     .help()
//     .argv;

// module.exports = {
//     argv
// }

// =================================================================

const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'indica si la tarea esta completada'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion //        descripcion:descripcion ..es lo mismo en emc7 antes era asi en emc6
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    // .command('listar', 'Imprime el resultado de una tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}
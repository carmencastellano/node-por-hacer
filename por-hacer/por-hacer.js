const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) { throw new error('No se pudo grabar', err) }
    });

};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    // let tarea = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion
    // })

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //devuelve /1 si no encuentra ninguna descripcion que coincida

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return false
    } else {
        return true;
    }
}

const borrar = (descripcion) => {

    // cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarDB();
    //     return true
    // } else {
    //     return false;
    // }

    cargarDB();

    // otra manera utiliza el filter.. quita o filtra algo y  me devuelve un nuevo arreglo filtrando lo que le indico
    // aca me devuelve un arreglo con todo menos cuando !== las descripciones no coinciden
    let nuevolistado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion !== descripcion;
        })
        // para saber si lo borro o no comparo el length de ambos arrays

    if (listadoPorHacer === nuevolistado) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB(); // guardaDB graba listadoporhacer
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
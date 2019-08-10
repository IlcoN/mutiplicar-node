const fs = require('fs');
const colors = require('colors');

let crearArchivo = async(base, limite) => {

    if (!Number(base) || !Number(limite)) {
        throw new Error('NaN');
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += base * i + '\n';
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error('err');
        }
    });
    return `tabla-${base}.txt`.red;
}

let listarTabla = async(base, limite) => {
    console.log(`Tabla del ${base}`.green)
    if (!Number(base) || !Number(limite)) throw new Error("NaN");

    for (let i = 0; i <= limite; i++) {
        console.log(base * i);
    }
    return;
}

module.exports = {
    crearArchivo,
    listarTabla
}
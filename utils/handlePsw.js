const bcryptjs = require('bcryptjs');

// Esta funcion tomara un texto plano ( ese psw que ponemos) y encriptara ese texto plano en un hash alfanumerico de formato ilegible // This will encrypt the string. It will take the string and convert it in a encrypted manner

//passwordPlain : contraseña sin encriptar : hola123
const encrypt = async(passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    // Version encriptada del psw / encrypt psw version -> $@#$%gsejj119
    return hash;
}


// Va a comprar nuestro psw con el texto encriptado en nuestra BBDD y dira.. es la misma? // Will compare the hash / encrypted manner with the psw we have in the DDBB and it will return true if it is the same
// psw without encrypted with psw encrypted
const compare = async(passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};



module.exports = {encrypt , compare}
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base= 5, listar=false,hasta) => {
    try {
        let salida='';
        let consola = '';
        let nameFile = `tabla-${base}.txt`
        
        for(let i = 1;i<=hasta;i++){
            salida +=`${base} x ${i} = ${base*i}\n`;
            consola += `${base.toString().green} x ${i.toString().green} = ${base*i}\n`;
        }
        if (listar){
            console.log('===========================');
            console.log('===== TABLA DEL:',base,'=======');
            console.log('===========================');
            console.log(consola)
        }
    
        fs.writeFileSync (`./salida/${nameFile}` ,salida);
        // 
        return nameFile
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}
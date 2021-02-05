const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
console.clear();
// console.log(process.argv);
console.log(argv);
// console.log('base: yargs', argv.b);
// const [,,arg3='base=5'] = process.argv;
// const [,base=5] = arg3.split('=');
// console.log(base);
// const base = 24;
crearArchivo(argv.b,argv.l,argv.h)
    .then (nombreArchivo => console.log(nombreArchivo, 'CREATE FILE'.bgGreen))
    .catch(err => console.log(err));












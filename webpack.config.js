const path = require('path');

module.exports = {
  entry: '/sketch-01.js', // Tu archivo de entrada
  output: {
    filename: 'main.js', // Archivo de salida que se incluirá en index.html
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardará el resultado
  },
  mode: 'production' // Puede ser 'development' o 'production'
};

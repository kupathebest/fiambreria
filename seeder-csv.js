const fs = require('fs');
const csv = require('csv-parser');
const db = require('./database/models/index'); // Importa el modelo Sequelize correspondiente

async function seedFromCSV() {
  const csvFilePath = '\prueba.csv'; // Ruta al archivo CSV

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', async (row) => {
      try {
        // Inserta cada fila del CSV como un nuevo registro en la base de datos
        await db.Product.create({
          name: row.name,
          price:row.price,
          image:row.image,
          providerId:row.providerId,
          brandId:row.brandId
         
        });
      } catch (error) {
        console.error('Error al insertar datos:', error);
      }
    })
    .on('end', () => {
      console.log('Datos sembrados con éxito desde el archivo CSV.');
    });
}

seedFromCSV();

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Product.belongsTo(models.Image,{
            as : 'image'
    
        })
        Product.belongsTo(models.Provider,{
            as : 'provider'
    
        })
        /*
     Camera.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'cameraId'
      })*/
    }
  };
  Product.init({
    name: DataTypes.STRING,
    brand:DataTypes.STRING,
    price: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
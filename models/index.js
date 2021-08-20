// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category)
// Products belongsTo Category

Category.hasMany(Product)
// Categories have many Products

Product.belongsToMany(Tag)
// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(ProductTag)
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

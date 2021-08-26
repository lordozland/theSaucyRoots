// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Products belongsTo Category

Category.hasMany(Product)
// Categories have many Products

Product.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
})
// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(ProductTag)
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

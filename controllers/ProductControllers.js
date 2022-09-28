const Product = require("../models/ProductModels");
/**
 *  gets all producsts
 * @route GET /api/product/:id
 * @param {*} req
 * @param {*} res
 */
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
/**
 * @desc Gets a single product
 * @route  GET /api/product/:id
 * @param {*} req
 * @param {*} res
 */
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "product Not Found" }));
    }else{
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(product))
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProduct
};

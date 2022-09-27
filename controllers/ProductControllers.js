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
async function getProduct(req, res) {
    try {
      const products = await Product.findAll();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  }
module.exports = {
  getProducts,
};

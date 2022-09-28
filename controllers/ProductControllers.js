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


async function createProduct(req,res){
  try{
  const product = {
    title:'Test Product',
    desc:'A test Product',
    price:100
  }

const newProduct = Product.create(product)
res.WriteHead(201, {'Content-Type': 'application/json'})
return res.end(JSON.stringify(newProduct))

  }catch(error){
    console.log(error)
  }
}



module.exports = {
  getProducts,
  getProduct,
  createProduct,
};

const products = require("../data/products");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id){
  return new Promise((resolve,reject)=>{
    const product = products.find((item)=> item.id === id)
    resolve(product)
  })
}
module.exports={
    findAll,
    findById
}
 
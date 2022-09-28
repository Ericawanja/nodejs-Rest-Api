let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    console.log(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((item) => item.id === id);
    products[index] = { id, ...product };

    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

function remove(id){
  return new Promise((resolve,reject)=>{
    products = products.filter((item)=> item.id !== item)
    writeDataToFile('./data/products.json', products)
    resolve()
  })
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};

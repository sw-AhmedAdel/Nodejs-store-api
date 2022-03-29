const products = require('./products.mongo');
const fs = require('fs');
const path = require('path');

async function populateAllProducts() {
  const getProducts = JSON.parse( fs.readFileSync(path.join(__dirname,'..','..', 'data', 'products.json')));
  for(const Product of getProducts) {
    console.log(Product);
    await CreateNewProduct(Product);
  }
}


async function loadALLProducts() {
    const firstProduct = await products.findOne({
      "name": "accent chair",
      "price": 25,
      "company": "marcos",
      "rating": 4
    })
    if(firstProduct){
      console.log('all products already exits');
    }
    else {
      await populateAllProducts();
    }
}

async function CreateNewProduct (Product) {
  const newProduct = new products(Product);
  await newProduct.save();
}

async function GetAllProducts () {
  return await products.find();
}

module.exports = {
  loadALLProducts,
  CreateNewProduct,
  GetAllProducts
}

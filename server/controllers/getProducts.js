const fs = require("fs");

const getProducts = () => {
  const productData = JSON.parse(
    fs.readFileSync("./controllers/model/products.json")
  );
  return productData;
};

module.exports = { getProducts };

//c1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//c2
const products = [
  new Product(1, "MacBook Pro 16", 52000000, 8, "Laptop", true),
  new Product(2, "Dell XPS 15", 38000000, 3, "Laptop", true),
  new Product(3, "Lenovo ThinkPad X1", 29000000, 0, "Laptop", false),
  new Product(4, "Apple Watch Ultra 2", 12500000, 14, "Smartwatch", true),
  new Product(5, "Samsung Galaxy Watch 6", 7800000, 22, "Smartwatch", true),
  new Product(6, "Garmin Fenix 7", 9200000, 0, "Smartwatch", false)
];

console.log("Danh sách sản phẩm ban đầu");
console.log(products);

//c3
const nameAndPriceList = products.map(function (product) {
  return { name: product.name, price: product.price };
});

console.log("\nMảng chỉ chứa name và price");
console.log(nameAndPriceList);

//4
const availableProducts = products.filter(function (product) {
  return product.quantity > 0;
});

console.log("\nSản phẩm còn hàng trong kho");
console.log(availableProducts);

//5
const hasExpensiveProduct = products.some(function (product) {
  return product.price > 40000000;
});

console.log("\n Có sản phẩm giá > 40tr không?");
console.log(hasExpensiveProduct ? "Có" : "Không");

//6
const smartwatches = products.filter(function (p) {
  return p.category === "Smartwatch";
});

const allSmartwatchesAvailable = smartwatches.every(function (p) {
  return p.isAvailable === true;
});

console.log("\nTất cả Smartwatch có đang bán không");
console.log(allSmartwatchesAvailable ? "Có, tất cả đều đang bán" : "Không, có sp đang ngừng bán");

//7
const totalInventoryValue = products.reduce(function (total, product) {
  return total + product.price * product.quantity;
}, 0);

console.log("\nTổng giá trị kho hàng");
console.log(
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    totalInventoryValue
  )
);

// 8
console.log("\n Duyệt mảng bằng for...of ");
for (const product of products) {
  let statusText = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${statusText}`);
}

//9
console.log("Duyệt thuộc tính sản phẩm đầu tiên bằng for...in");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}

//10
const activeProductNames = products
  .filter((p) => p.isAvailable === true && p.quantity > 0)
  .map((p) => p.name);

console.log("Tên các SP đang bán và còn hàng");
console.log(activeProductNames);
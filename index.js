const products = [];

const filters = {
  searchItems: "",
};

const renderProducts = function (products, filters) {
  const filteredProducts = products.filter(function (item) {
    return item.title.toLowerCase().includes(filters.searchItems.toLowerCase());
  });
  document.querySelector("#product").innerHTML = "";
  filteredProducts.forEach(function (item) {
    const productEl = document.createElement("p");
    productEl.textContent = item.title;
    document.querySelector("#product").appendChild(productEl);
  });
};

renderProducts(products, filters);
document
  .querySelector("#search-product")
  .addEventListener("input", function (e) {
    filters.searchItems = e.target.value;
    renderProducts(products, filters);
  });

document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    products.push({
      title: e.target.elements.productTitle.value,
      exist: true,
    });
    renderProducts(products, filters);
    e.target.elements.productTitle.value = "";
  });

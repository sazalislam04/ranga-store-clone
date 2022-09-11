const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};
let arr = [];
const loadProducts = () => {
  const url = `https://fakestoreapi.com/products`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      arr = data;
      displayProducts(data);
    });
};

const displayProducts = (products) => {
  const productsContainer = getElement("products-container");
  productsContainer.textContent = "";
  products.forEach((product) => {
    const { category, image, price, title, id } = product;
    const productDiv = document.createElement("div");
    productDiv.classList.add("col");
    productDiv.innerHTML = `
        <div class="card card-hover h-100">
        <img src="${image}" class="card-img-top py-3 w-50 mx-auto" alt="">
        <div class="card-body text-center">
          <h5 class="card-title fs-3">${title}</h5>
          <span>Category: ${category}</span>
          <p class="card-text fs-3">Price: $ ${price}</p>
          </div>
          <button onclick="addToCart(${id}, ${price})" class="btn rounded-0 btn-primary">Add To Cart</button>
        </div>
        `;
    productsContainer.appendChild(productDiv);
  });
};

const searchBtn = getElement("search-btn");
searchBtn.addEventListener("click", () => {
  const searchInput = getElement("search-input").value;
  getElement("search-input").value = "";
  const searchProduct = arr.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  displayProducts(searchProduct);
});

loadProducts();

let fakeApi = 'https://jsonplaceholder.typicode.com/todos';

async function getData() {
    let res = await fetch(fakeApi);
    let data = await res.json();;
    return data;
}


async function bindDataToProductDetail(pagination = 1, callback) {
    const data = await getData();
    return callback(pagination, data);
}


  bindDataToProductDetail((pagination, data) => {
    const htmls = Object.keys(data).map((item) => {
        return `
        <div class="card-product-image">
          <a href="product-detail"> <img src="./image/product-04-300x300.jpg"
            class="card-img-top" alt="Product" /></a>
          <div class="card-body card-body-product">
            <span class="border border-product">
              <i data-bs-toggle="tooltip" title="Compare" class="fas fa-exchange-alt"></i>
            </span>
            <span class="border border-product">
              <i data-bs-toggle="tooltip" title="Wishlist" class="fas fa-heart"></i>
            </span>
            <span class="border border-product"> <a href="product-detail">
              
            </a>
              <i data-bs-toggle="tooltip" title="Quick view" class="fas fa-eye"></i>
            </span>
            <span class="border border-product">
              <i data-bs-toggle="tooltip" title="View products" class="fas fa-shopping-cart"></i>
            </span>
          </div>
        </div>

        <div class="card-product-content">
          <a href="product-detail" class="card-title card-product-title">
            ${data[item].title}
          </a>
          <p class="card-text card-product-text">$100.00</p>
        </div>
       `
    })
    const sizeRender = 8;
    const cardProductList = document.querySelectorAll('.card-product')
    for (let i = (pagination-1)*sizeRender; i < (sizeRender*pagination); i++) {
        cardProductList[i].innerHTML = htmls[i];
    }
});

// pagination
bindDataByProductDetail()

const selectPagination = document.querySelector('.two-pagination');
selectPagination.addEventListener('click', (e) => {
  bindDataByProductDetailByPagination(2);
})



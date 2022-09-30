let countProduct = document.querySelector('.counter .count-product').textContent;

const btnPlus = document.querySelector('.counter .btn-plus');
const btnMinus = document.querySelector('.counter .btn-minus');

countProduct = parseInt(countProduct);

btnPlus.addEventListener('click', () => {
    countProduct += 1;
    document.querySelector('.counter .count-product').textContent = countProduct ;
})

btnMinus.addEventListener('click', () => {

    if(countProduct < 1) { 
        countProduct = 0;
        document.querySelector('.counter .count-product').textContent = countProduct ;
    
    }
    else {
         countProduct -= 1;
    document.querySelector('.counter .count-product').textContent = countProduct;
    }
})

// add to cart

const addToCart = document.querySelector('.btn-add-to-cart');


addToCart.addEventListener('click', () => {
    let productNumber = localStorage.getItem('cartNumber')
    localStorage.setItem("cartNumber",productNumber + countProduct)
    document.querySelector('.align-top').textContent = productNumber + countProduct;
})
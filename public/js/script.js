// Add product to cart
let product = [
    {
        img:"#",
        name:"Birthday Grouped",
        cost:"100$"
    }, 
    {
        img:"#",
        name:"Gold",
        cost:"100$"
    },
    {
        img:"#",
        name:"Hello Kitty",
        cost:"100$"
    },
    {
        img:"#",
        name:"Panadol",
        cost:"100$"
    },
    {
        img:"#",
        name:"T-shirt",
        cost:"100$"
    },
    {
        img:"#",
        name:"Local Brands",
        cost:"100$"
    },
    {
        img:"#",
        name:"Kumanthong",
        cost:"100$"
    },
    {
        img:"#",
        name:"Tarot",
        cost:"100$"
    }
]


let cart = document.querySelectorAll('.border-product .fa-shopping-cart');
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click',() => {
        cartNumber();
    })
}



function cartNumber() {
    let productNumber = localStorage.getItem('cartNumber')
    let totalCost = localStorage.getItem('totalCost')

    totalCost = parseInt(totalCost);
    productNumber = parseInt(productNumber);

    if(productNumber) {
        localStorage.setItem('totalCost', totalCost + 100)
        localStorage.setItem("cartNumber", productNumber+1)
        document.querySelector('.totalCost').textContent = totalCost+100;
        document.querySelector('.align-top').textContent = productNumber+1;

    } else {
        localStorage.setItem("totalCost",100)
        localStorage.setItem("cartNumber",1)
        document.querySelector('.align-top').textContent = 1;
        document.querySelector('.totalCost').textContent = 100;
    }
}


// wish list

const wishList = document.querySelectorAll('.border-product .fa-heart');
const cardBodyProduct   = document.querySelectorAll('.card-body-product'); 

for (let i = 0; i < wishList.length; i++) {
    wishList[i].addEventListener('click',() => {
        cardBodyProduct[i].style.opacity = 1;
    })
}

// add onclick event to all wish list, when click it will add to wish list and change color to #ff0000
for (let i = 0; i < wishList.length; i++) {
    wishList[i].addEventListener('click',() => {
        wishList[i].style.color = "#b1d1c9";
    })
}


// add onclick event to btn-plus, when click it will change value count-product to + 1

// search header

const search = document.querySelector('.input-group .form-control');

// fake Api



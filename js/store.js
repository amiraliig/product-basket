let productData = [
    { id: 1, title: 'Album 1', price: 12.93, img: 'Images/Album 1.png' },
    { id: 2, title: 'Album 2', price: 21, img: 'Images/Album 2.png' },
    { id: 3, title: 'Album 3', price: 33, img: 'Images/Album 3.png' },
    { id: 4, title: 'Album 4', price: 41.98, img: 'Images/Album 4.png' },
    { id: 5, title: 'Coffee', price: 98, img: 'Images/Cofee.png' },
    { id: 6, title: 'Shirt', price: 65.33, img: 'Images/Shirt.png' },
]
let userbasket = []
console.log(productData)
let $ = document
let productsList = $.querySelector('.shop-items')

productData.forEach(function(product){

let productContainer = $.createElement('div')
productContainer.classList.add('shop-item')

let titleSpan = $.createElement('span') 
titleSpan.classList.add('shop-item-title')
titleSpan.innerHTML = product.title

let productImag = $.createElement('img')
productImag.setAttribute('src',product.img)
productImag.classList.add('shop-item-image')

let detailContainer = $.createElement('div')
detailContainer.classList.add('shop-item-details')

let productPrice = $.createElement('span')
productPrice.classList.add('shop-item-price')
productPrice.innerHTML = product.price

let addButton = $.createElement('button')
addButton.className = "btn btn-primary shop-item-button"
addButton.innerHTML = "ADD TO CARD"
addButton.addEventListener('click',function(){
    addProductToBasket(product.id)
})
detailContainer.append(productPrice,addButton)
productContainer.append(titleSpan,productImag,detailContainer)
productsList.append(productContainer)
})



function addProductToBasket(productId){
   let userProduct = productData.find(function(product){
    return product.id == productId
    })
   userbasket.push(userProduct)
   console.log(userbasket)
}

function basketProductGenrator(basketArr){
basketArr.forEach(function(product){

let cartRow = $.createElement('div')
cartRow.classList.add('cart-row')

let cartItem = $.createElement('div')
cartItem.classList.add('cart-item','cart-column')

})
}
let productData = [
    { id: 1, title: 'Album 1', price: 12.93, img: 'Images/Album 1.png' ,count:1},
    { id: 2, title: 'Album 2', price: 21, img: 'Images/Album 2.png' ,count:3},
    { id: 3, title: 'Album 3', price: 33, img: 'Images/Album 3.png' ,count:1},
    { id: 4, title: 'Album 4', price: 41.98, img: 'Images/Album 4.png' ,count:1},
    { id: 5, title: 'Coffee', price: 98, img: 'Images/Cofee.png' ,count:1},
    { id: 6, title: 'Shirt', price: 65.33, img: 'Images/Shirt.png' ,count:1},
]
let userbasket = []
console.log(productData)
let $ = document
let productsList = $.querySelector('.shop-items')
let removeAllPruduct = $.getElementById('remove-all')

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
    basketProductGenrator(userbasket)
    calctotalprice(userbasket)
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
let productBasketItems = $.querySelector('.cart-items')

function basketProductGenrator(basketArr){
    productBasketItems.innerHTML = ''
basketArr.forEach(function(product){

let cartRow = $.createElement('div')
cartRow.classList.add('cart-row')

let cartItem = $.createElement('div')
cartItem.classList.add('cart-item','cart-column')

let imageItemUserbasket = $.createElement('img')
imageItemUserbasket.classList.add('cart-item-image')
imageItemUserbasket.setAttribute('src',product.img)

let titleItemUserBasket = $.createElement('span')
titleItemUserBasket.classList.add("cart-item-title")
titleItemUserBasket.innerHTML = product.title

cartItem.append(imageItemUserbasket,titleItemUserBasket)

let priceuserbasket = $.createElement('span')
priceuserbasket.classList.add('cart-price','cart-column')
priceuserbasket.innerHTML = product.price

let btnContainer = $.createElement('div')
btnContainer.classList.add('cart-quantity','cart-column')

let productCount = $.createElement('input')
productCount.classList.add('cart-quantity-input') 
productCount.setAttribute('type','number')
productCount.setAttribute('value',product.count)
productCount.addEventListener('change',function(){
    updateProductConunt(product.id,productCount.value)
})

let removeBtnBasket = $.createElement('button')
removeBtnBasket.classList.add('btn','btn-danger')
removeBtnBasket.innerHTML = 'REMOVE'
removeBtnBasket.addEventListener('click',function(){
   deleteBtnBasket(product.id)
    
})

btnContainer.append(productCount,removeBtnBasket)

cartRow.append(cartItem,priceuserbasket,btnContainer)

productBasketItems.append(cartRow)

})
}

function deleteBtnBasket(productId){
    let productDeletedIndex = userbasket.findIndex(function(product){
return productId == product.id
    })
    userbasket.splice(productDeletedIndex,1)
    basketProductGenrator(userbasket)
    calctotalprice(userbasket)
}
function removeAllPriductHandler(){
    userbasket = []
    basketProductGenrator(userbasket)
    calctotalprice(userbasket)
}
removeAllPruduct.addEventListener('click',removeAllPriductHandler)

function calctotalprice(arr){
    let sumPrice = 0
for(let i = 0;i < arr.length ;i++){
    sumPrice += arr[i].price * (arr[i].count)
}
let totalPriceElem = $.querySelector('.cart-total-price')
totalPriceElem.innerHTML = sumPrice

}
function updateProductConunt(productId,newcount){
userbasket.forEach(function(product){
if(product.id == productId){
    product.count = newcount
}
})
calctotalprice(userbasket)
}


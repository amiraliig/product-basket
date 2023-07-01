let productData = [
    {id:1,title:"Album1",price:200,image:'./Image/Album1.png'},
    {id:2,title:"Album2",price:399,image:'./Image/Album2.png'},
    {id:3,title:"Album3",price:300,image:'./Image/Album3.png'},
    {id:4,title:"Album4",price:99,image:'./Image/Album4.png'},
    {id:5,title:"Cofee",price:100,image:'./Image/Cofee.png'},
    {id:6,title:"Shirt",price:299,image:'./Image/Shirt.png'},
]
let $ = document
productData.forEach(function(product){
let productContainer = $.createElement('div')
productContainer.classList.add('shop-item')

let titleSpan = $.createElement('span') 
titleSpan.classList.add('shop-item-title')
titleSpan.innerHTML = product.title

let productImag = 

})
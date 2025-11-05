const products=document.getElementsByClassName('product');
for(let i=0; i<products.length ;i++){
    const product=products[i]
    const Like =product.getElementsByTagName('svg')[0]
    Like.addEventListener('click',function(){
        Like.classList.toggle('Liked')
    })
}
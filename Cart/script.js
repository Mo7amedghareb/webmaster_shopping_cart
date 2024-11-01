function displaycartitems(){
    let html='';
    let cartitem=JSON.parse(localStorage.getItem('productincart'))
    cartitem.forEach(item =>{
        html+=`
            <div class="cartlist">
                <img src="${item.image}" alt="">
                <h3>${item.name}</h3>
                <h2>${item.description}</h2>
                <h1>${item.price}$</h1>
                <h3>total price: ${item.totalprice}$</h3>
                <h3>no.of items: ${item.quantity}</h3>
            </div>    
        `
    });
    document.querySelector('.cartdisplay').innerHTML=html;
}
displaycartitems();

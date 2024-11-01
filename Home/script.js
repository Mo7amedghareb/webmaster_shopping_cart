var user=localStorage.getItem("user");
if(user){
    document.getElementById("logoutbtn").classList.remove("hidden");
}
document.getElementById("logoutbtn").addEventListener("click",function(){
    localStorage.removeItem("user");
    window.location.href="signin.html";
})

const products=[];

const addbtn=document.getElementsByClassName("addbtn");
for(var i=0;i<addbtn.length;i++){
    let cartbtn=addbtn[i];
    cartbtn.addEventListener("click",()=>{
        let product={
            image:event.target.parentElement.parentElement.children[0].children[0].src,
            name:event.target.parentElement.parentElement.children[1].children[0].textContent,
            description:event.target.parentElement.parentElement.children[2].children[0].textContent,
            price:parseInt(event.target.parentElement.parentElement.children[3].textContent),
            totalprice:parseInt(event.target.parentElement.parentElement.children[3].textContent),
            quantity:1,
        }
        additemtolocalstorage(product);
    })
}

function additemtolocalstorage(product){
    let cartitem=JSON.parse(localStorage.getItem('productincart'))
    if(cartitem === null){
        products.push(product);
        localStorage.setItem('productincart',JSON.stringify(products));
    }
    else{
        cartitem.forEach(item => {
            if(product.name == item.name){
                product.quantity=item.quantity+=1;
                product.totalprice = item.totalprice += product.totalprice;
            }
            else{
                products.push(item);
            }
        });
        products.push(product);
    }
    localStorage.setItem('productincart',JSON.stringify(products));
    window.location.reload()
}

function cartnumber(){
    let cartnum=0;
    let cartitem=JSON.parse(localStorage.getItem('productincart'));
    cartitem.forEach(element=>{
        cartnum=element.quantity+=cartnum;
    });
    document.querySelector('.nav-item span').textContent=cartnum;
}
cartnumber();


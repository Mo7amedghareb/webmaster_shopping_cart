document.getElementById("loginform").addEventListener("submit",function(event){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var user=localStorage.getItem(username);
    if(user){
        var parseduser=JSON.parse(user);
        if(parseduser.password===password){
            localStorage.setItem("user",JSON.stringify(parseduser));
            window.location.href="file:///D:/Web_Masters%20training%20(React)%20frontend/week%203%20tasks/webmaster_shopping_cart/Home.html";
        }else{
            alert("incorrect password");
        }
    }else{
        alert("user not found");
    }
})
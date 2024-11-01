document.getElementById("registerform").addEventListener("submit",function(event){
    event.preventDefault();
    var fname=document.getElementById("fname").value;
    var sname=document.getElementById("sname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    if(password!==confirmpassword){
        alert("password doesnot match confirm password");
        return;
    }
    const user={
        fname:fname,
        sname:sname,
        email:email,
        password:password,
    };
    localStorage.setItem(email,JSON.stringify(user));
    alert("registration successful please login");
    window.location.href="signin.html";
});
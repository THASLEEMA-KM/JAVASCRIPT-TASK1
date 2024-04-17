const login = () =>
{
    if(usernameInput.value && pswdInput.value)
    {
        console.log(usernameInput.value,pswdInput.value);
        sessionStorage.setItem("username",usernameInput.value)
        sessionStorage.setItem("password",pswdInput.value)
        // navigate to home page
        window.location = "index.html"
    }else{
        alert("Please fill the form Completely!!!")
    }
}  
const register = () =>
{
    if(firstnameInput.value && lastnameInput.value && emailInput.value && pswdInput.value)
    {
        console.log(firstnameInput.value,pswdInput.value);
        sessionStorage.setItem("firstname",firstnameInput.value)
        sessionStorage.setItem("lastname",lastnameInput.value)
        sessionStorage.setItem("email",emailInput.value)
        sessionStorage.setItem("password",pswdInput.value)
        // navigate to home page
        window.location = "login.html"
    }else{
        alert("Please fill the form Completely!!!")
    }
}
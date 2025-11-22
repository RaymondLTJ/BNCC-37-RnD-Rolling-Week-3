const user = "user1";
const pass = "user";

const loginForm = document.getElementById("loginForm");
const rememberCheckbox = document.getElementById("remember");
const getUsername = document.getElementById("username");
const getPassword = document.getElementById("password");

loginForm.addEventListener ("submit", (e) => {
    e.preventDefault();
    
    const username = getUsername.value;
    const password = getPassword.value;

    if (username === user && password === pass){

        if (rememberCheckbox.checked){
            localStorage.setItem("savedUser", username);
        } 
        localStorage.setItem("loggedUser", username);

        alert ("Login Success!");
        window.location.href = "Dashboard.html"

        
    }

    else{
        alert ("Your username/password is incorrect!");
        getUsername.focus();
    }
});

window.addEventListener("load", function(){
    const savedUser = localStorage.getItem("savedUser")
     if (savedUser){
        getUsername.value = savedUser;
        rememberCheckbox.checked = true;
     }
});
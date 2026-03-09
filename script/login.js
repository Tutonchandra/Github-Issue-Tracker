document.getElementById("login-btn").addEventListener("click", function(){
    // console.log("clicked the button")
    const userInput =document.getElementById("input-username");
    const userName = userInput.value;
    // console.log(userName);
    const inputPass = document.getElementById("input-password");
    const userPass = inputPass.value;
    // console.log(userPass);
    if(userName == "admin" && userPass == "admin123"){
        window.location.href = "home.html";
        console.log("login Success")
    }

    else{
        alert('Please Enter your valid userName and Password');
        return;
    }
})
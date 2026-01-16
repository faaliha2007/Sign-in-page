var namebox = document.getElementById("namebox")

var passwordbox = document.getElementById("passwordbox")
var emailbox = document.getElementById("emailbox")

var registerbtn = document.getElementById("registerbtn")

var confirmbox = document.getElementById("confirmbox")
var nameerror = document.getElementById("nameerror")
var emailerror = document.getElementById("emailerror")
var passworderror = document.getElementById("passworderror")
var confirmerror = document.getElementById("confirmerror")
var msg = document.getElementById("msg")
function validate(){

    let valid = true;

    //name
    if (namebox.value === "") {
        nameerror.classList.remove("hidden")
        valid = false
    }
    else {
        nameerror.classList.add("hidden")
    }
    //email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailbox.value)) {
        emailerror.classList.remove("hidden")
        valid = false
    }
    else {
        emailerror.classList.add("hidden")
    }
    //password
    if (passwordbox.value === "" || passwordbox.value.length < 6) {
        passworderror.classList.remove("hidden")
        valid = false
    }

    else {
        passworderror.classList.add("hidden")
    }

    //confirming 
    if (confirmbox.value != passwordbox.value) {
        confirmerror.classList.remove("hidden")
        valid = false
    }
    else {
        confirmerror.classList.add("hidden")
    }

    //button
    if (valid) {
        registerbtn.disabled = false
        registerbtn.classList.remove("opacity-50", "cursor-not-allowed")
        registerbtn.addEventListener("click",function(){
        //msg
            if(!registerbtn.disabled)
        {
            msg.classList.remove("hidden")

            setTimeout(function(){
               msg.classList.add("hidden")  
            },2000)
        }

    })
    }
    else {
        registerbtn.disabled = true
        registerbtn.classList.add("opacity-50", "cursor-not-allowed")
    }



   
}

namebox.addEventListener("input",validate)
emailbox.addEventListener("input",validate)
passwordbox.addEventListener("input",validate)
confirmbox.addEventListener("input",validate)

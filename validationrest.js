const id01 = document.getElementById('id01');
const id02 = document.getElementById('id02');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const modal = document.getElementById('modal');
const modal1 = document.getElementById('modal1');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1) {
    modal.style.display = "none";
    modal1.style.display = "none";
  }
}


function validatelogin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    /* Setting minimum length of email to be 3 characters */
    if (email.value.length < 3){
        alert("Minimum length of email is 3 characters");
    }

    /*Setting password validations*/
    if (password.value.length < 8){
        alert("Minimum length of password is 8 characters");
    }
    if (!(/[a-z]/.test(password.value))){
        alert("Password must contain atleast one lowercase character");
    }
    if (!(/[A-Z]/.test(password.value))){
        alert("Passsword must contain atleast one uppercase character");
    }
    if (!(/\d/.test(password.value))){
        alert("Password must contain atleast one digit");
    }
    const specialCharacters = "!@#$%^&*()_+";
    if (![...specialCharacters].some(char => password.value.includes(char))) {
        alert("Password must contain atleast one special character");
    } 
}

function validatesignup(){
    var email1 = document.getElementById("email1");
    var password1 = document.getElementById("password1");
    var cpassword1 = document.getElementById("cpassword1");
    /* Passwords match validation*/
    if (password1.value != cpassword1.value){
        alert("Passwords do not match");
    }

    /* Setting minimum length of email to be 3 characters */
    if (email1.value.length < 3){
        alert("Minimum length of email is 3 characters");
    }

    /*Setting password validations*/

    if (password1.value.length < 8){
        alert("Minimum length of password is 8 characters");
    }
    if (!(/[a-z]/.test(password1.value))){
        alert("Password must contain atleast one lowercase character");
    }
    if (!(/[A-Z]/.test(password1.value))){
        alert("Passsword must contain atleast one uppercase character");
    }
    if (!(/\d/.test(password1.value))){
        alert("Password must contain atleast one digit");
    }
    const specialCharacters = "!@#$%^&*()_+";
    if (![...specialCharacters].some(char => password1.value.includes(char))) {
        alert("Password must contain atleast one special character");
    }
    }

function exit(){
    location.reload();
}


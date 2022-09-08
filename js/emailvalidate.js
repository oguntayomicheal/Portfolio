const form = document.getElementById('form');
const email = document.getElementById('email')
const errorMsg = document.getElementById('error');

function checkLowerCase(str) {
    return  str === str.toLowerCase();
     }

const error = (e) => {
    if (!checkLowerCase(email.value)) {
        e.preventDefault ();
        errorMsg.textContent = "Your Email must be in lowercase, Please correct and submit";
        setTimeout(() => {
            errorMsg.textContent = " ";
        }, 3000);  
    } else {
        setTimeout(() => {
            form.submit();
        }, 1300);
    }
}
form.addEventListener('submit', error);

// section 1
let generateBtn = document.querySelector('.generateBtn');
let clearBtn = document.querySelector('.clearBtn');
let inputField = document.querySelector(".input");
// section 2
let generateBttn = document.querySelector('.generateBttn');
let clearBttn = document.querySelector('.clearBttn');
let inputUserField = document.querySelector('.input-user')
let inputUserNumberField = document.querySelector('.input-user-number');
let inputUserPassword = document.querySelector('.input-user-password');
let True = false;
inputField.value = ""
inputUserField.value = "";
inputUserNumberField.value = "";
inputUserPassword.value = "";

let charaterArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&"];
let password = "";

generateBtn.addEventListener("click", () => {
        password = ""
        for (i = 0; i <= 15; i++) {
                let randomIndex = Math.floor(Math.random() * charaterArry.length)
                password += charaterArry[randomIndex];
        }
        inputField.value = password;
        console.log(password);
})

clearBtn.addEventListener("click", () => {
        inputField.value = "";
})

generateBttn.addEventListener("click", () => {
        let string = "";
        password = "";

        if (inputUserField.value.length > 6 || inputUserNumberField.value.length > 4) {
                alert("User-name max length is 6\nUser-number max length is 4")
        } else {
                for (i = 0; i <= 3; i++) {
                        let randomIndex = Math.floor(Math.random() * charaterArry.length)
                        password += charaterArry[randomIndex];
                }

                for (i = 0; i <= inputUserField.value.length; i++) {
                        if (i % 2 == 0) {
                                string += inputUserField.value.charAt(i).toUpperCase()
                        } else {
                                string += inputUserField.value[i];
                        }
                }
                inputUserPassword.value = string + inputUserNumberField.value + password;
        }
})
clearBttn.addEventListener("click", () => {
        inputUserField.value = "";
        inputUserNumberField.value = "";
        inputUserPassword.value = "";
})

function restrictAlphabets(e) {
        let x = e.which || e.keycode;
        if ((x >= 48 && x <= 57)) {
                return true;
        } else {
                return false;
        }
}
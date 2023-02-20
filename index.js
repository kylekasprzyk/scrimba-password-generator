const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")

let passwordLength = 15
let firstPassword = " "
let secondPassword = " "


function newPassword() {
    console.log("clicked")
    firstPasswordEl.textContent = " "
    secondPasswordEl.textContent = " "
 
    for (let i = 0; i < passwordLength; i++) {
        let optionOne = Math.floor ( Math.random() * characters.length )
        let firstPassword = characters[optionOne]
        firstPasswordEl.textContent += firstPassword
    }
        
    for (let i = 0; i < passwordLength; i++) {
        let optionTwo = Math.floor ( Math.random() * characters.length )
        let secondPassword = characters[optionTwo]
        secondPasswordEl.textContent += secondPassword
    }
}


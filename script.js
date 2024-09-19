let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTMl == '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }else{
            console.log(e.target)
            string = string + e.target.innerHTMl
            document.querySelector('input').value = string
        }
    })
})
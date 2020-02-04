//FOCUS & BLUR
let focusElements = [];
let blurElements = [];

runOnFocus = (event) => {
   
    focusElements.push({
        tag: event.target.tagName,
        id: event.target.id,
        classname: event.target.className
    })
    console.log("Focused: ")
    console.log(focusElements);
}

runOnBlur = (event) => {
    blurElements.push({
        tag: event.target.tagName,
        id: event.target.id,
        classname: event.target.className
    })
    console.log("Blurred: ")
    console.log(blurElements);
}
const input = document.querySelector('input[type="text"]')
console.log(input)

window.addEventListener("focus", runOnFocus);
window.addEventListener("blur", runOnBlur);
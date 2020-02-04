//FORM EVENT TRACKER

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

input.addEventListener("focus", runOnFocus);
input.addEventListener("blur", runOnBlur);

/*********************************************************************/ 

//KEYUP, KEYDOWN, KEYPRESS
let keydownElements = [];
let keyupElements = [];

runOnKeydown = (event) => {
    keydownElements.push({
        key: event.key,
        code: event.code
    })
    console.log("KeyDown: ")
    console.log(keydownElements);
}

runOnKeyup = () => {
    keyupElements.push({
        key: event.key,
        code: event.code
    })
    console.log("KeyUp: ")
    console.log(keyupElements);
}

window.addEventListener("keydown", runOnKeydown);
window.addEventListener("keyup", runOnKeyup);

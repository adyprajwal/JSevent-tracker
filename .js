//Keyboard Event Tracker
// kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let keydownElements = [];
let keyupElements = [];
let keypress = [];
runOnKeydown = (event) => {
    keydownElements.push({
        key: event.key,
        code: event.code
    })
    // console.log(keydownElements);
}

runOnKeyup = () => {
    keyupElements.push({
        key: event.key,
        code: event.code
    })
    // console.log(keyupElements);
}
keypress.push({
    keydownElements: keydownElements,
    keyupElements: keyupElements
})
console.log(keypress);
window.addEventListener("keydown", runOnKeydown);
window.addEventListener("keyup", runOnKeyup);


//Click Event Tracker
let clickElements = [];
runOnClick = (event) => {
    clickElements.push({
        tag: event.target.tagName,
        id: event.target.id,
        class: event.target.className
    })
    console.log("Clicked: ", clickElements);
}
window.addEventListener("click", runOnClick);

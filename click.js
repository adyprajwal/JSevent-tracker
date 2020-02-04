//Click Event Tracker
let clickElements = [];
runOnClick = (event) => {
    clickElements.push({
        tag: event.target.tagName,
        id: event.target.id,
        classname: event.target.className})
    console.log(clickElements);
}
window.addEventListener("click", runOnClick);

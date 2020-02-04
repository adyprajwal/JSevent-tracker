//CLICK HANDLER
runOnClick = (event) => {
    let x = event.target;
    console.log("id: " + x.id);
    console.log("classname: " + x.className);
    console.log("tag: " + x.tagName);   
} 
window.addEventListener("click", runOnClick);
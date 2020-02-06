//Scroll Event Tracker
let scrollElements = [];
runOnScroll = (event) => {
    scrollElements.push({
        tag: event.target.tagName,
        id: event.target.id,
        classname: event.target.className
    })
    console.log("Scrolled: ", scrollElements);
}
const scroll = document.querySelectorAll('*');
for(i=0; i< scroll.length; i++) {
    scroll[i].addEventListener('scroll', runOnScroll)
}
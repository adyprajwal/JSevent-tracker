//Scroll Event Tracker
runOnScroll = (event) => {
    let x = event.target;
    console.log("id: " + x.id);
}
window.addEventListener('scroll', function() { console.log('testing') }, false);
    
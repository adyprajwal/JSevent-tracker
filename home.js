

function handleClick() {
    document.getElementById('btn-id').innerHTML = "Clicked Once";
}

let scrolls = 0
function handleScroll() {
    document.getElementById("lorem").innerHTML = scrolls += 1;
}

function handleKeypress() {
    console.log("keypress occured");
}




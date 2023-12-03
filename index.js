
document.addEventListener('DOMContentLoaded', function() {
    circle = document.getElementById("mouse-circle");
    circleInner = document.getElementById("mouse-circle-content");

    scrollMoreText = document.getElementById("scrollmore");

    lastMouseX = 0;
    lastMouseY = 0;

    posx = 0;
    posy = 0;

    document.onmousemove = handleMouseMove;

    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;

    document.onscroll = handleMouseScroll;

    setInterval(updateMouseFollow, 25);




 }, false);


function handleMouseMove(event){
    var parent = circle.parentNode;
    var rect = parent.getBoundingClientRect();
    var cRect = circleInner.getBoundingClientRect();

    lastMouseX = event.clientX - rect.left - (cRect.width/2);
    lastMouseY = event.clientY - rect.top - (cRect.height/2);


}

function handleMouseScroll(event){
    lastMouseY += window.scrollY - prevScrollpos; 



    if(window.scrollY > 50){
        scrollMoreText.style.opacity =  (1 - (window.scrollY / 250))
    }
}

function updateMouseFollow(){
    posx += (lastMouseX - posx) * .25;    
    posy += (lastMouseY - posy) * .25;    

    circle.style.transform = `translate(${posx}px,${posy}px)`;
}

function handleMouseDown(event) {
    circleInner.classList.add("mouse-circle-grow");
}

function handleMouseUp(event) {
    circleInner.classList.remove("mouse-circle-grow");
}




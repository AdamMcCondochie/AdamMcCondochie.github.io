var prevScrollpos = window.scrollY;

document.onload = function() {
  navbar = document.getElementById("navbar");
}


window.onscroll = function() {
  //Hide Navbar on scrolling down and show when scroll up
  var currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    navbar.style.transform = "translateY(0%)";
  } 
  else if(currentScrollPos > navbar.offsetHeight) { 
      navbar.style.transform = "translateY(-100%)";
  }

  prevScrollpos = currentScrollPos;
} 

function focusImage(img){
  var imageviewer = document.getElementById("image-viewer");
  imageviewer.classList.remove("hidden");

  var fullimage = document.getElementById("full-image");
  fullimage.src = img.src;
}

function hide(element){
  element.classList.add('hidden');
}

function toggleShow(elementId){
  var e = document.getElementById(element);
  e.classList.toggle("hidden");
}
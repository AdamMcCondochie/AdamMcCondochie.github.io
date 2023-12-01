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
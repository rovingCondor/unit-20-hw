// Hamburger menu toggle | START 
function main(){
    var menuIconOpen = document.getElementsByClassName("open")[0];
    var menuIconClose = document.getElementsByClassName("close")[0];
    var menuItems = document.getElementsByClassName("menu");
    
    menuIconClose.style.display = "none";
    
    menuIconOpen.onclick = function() {
      this.style.display = "none";
      menuIconClose.style.display = "block";
      menuDisplay("show", menuItems);
    };
    
    menuIconClose.onclick = function() {
      this.style.display = "none";
      menuIconOpen.style.display = "block";
      menuDisplay("hide", menuItems);
    };
  }
  
  function menuDisplay(state, items){
    if(state=="show"){
      for(var i=1; i<items.length; i++){
        items[i].classList.add("show");
      }
    } else {
      for(var i=1; i<items.length; i++){
        items[i].classList.remove("show");
      }
    }
  }
  
  window.onload = function(){
    main();
  }
//  Hamburger menu toggle | END


// Sroll to top | START
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.13) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
// Sroll to top | END


// Modal window | START
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Modal window | END





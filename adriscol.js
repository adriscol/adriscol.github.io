// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change color of topButton on mouseover
function mouseOver() {
    document.getElementById("topButton").style.color = "#f44336";
}

// Change color of topButton on mouseout
function mouseOut() {
    document.getElementById("topButton").style = "";
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var topper = document.getElementById("topLink");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topper.className = "no-print w3-animate-right";
    } else {
        topper.className = "no-print w3-hide";
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
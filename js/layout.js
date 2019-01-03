var layerOpacity = document.getElementsByClassName("layer_opacity")[0];
var nav_item = document.getElementsByClassName("nav-item");
for (i = 0; i < nav_item.length; i++) {
    nav_item[i].onmouseover = function() {
        if (window.outerWidth > 768) {
            layerOpacity.style.height = document.getElementsByTagName('body')[0].clientHeight + "px";
        }
    };
    nav_item[i].onmouseout = function() {
        if (window.outerWidth > 768) {
            layerOpacity.style.height = "0px";
        }
    }
}
//open menu
// Mobile: Menu CanVas
var menuButton = document.getElementById("icon-nav");
let navTag = document.getElementsByClassName("menu")[0];
var closeButton = document.getElementsByClassName("close-nav-mobile")[0];

if (window.outerWidth <= 768) {
    layerOpacity.style.height = document.getElementsByTagName('body')[0].clientHeight + "px";
}

menuButton.onclick = function() {
    navTag.style.marginLeft = "0";
    layerOpacity.style.marginLeft = "0";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

closeButton.onclick = function() {
    navTag.style.marginLeft = `-${0.7 * document.getElementsByTagName('body')[0].clientWidth}px`;
    layerOpacity.style.marginLeft = "-100%";
    document.getElementsByTagName('body')[0].style.overflow = "unset";
}
// Go to Top
var toTop = document.getElementById("goto-top");
  
  toTop.addEventListener("click", function(){
  scrollToTop(1000);
});
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}
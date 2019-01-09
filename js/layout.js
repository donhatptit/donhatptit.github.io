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
// Mobile: Menu Accordion
var dropdown_menu = document.getElementsByClassName("dropdown-menu");
var iconPlus = document.getElementsByClassName("icon-plus");
var iconMinus = document.getElementsByClassName("icon-minus");

for (let i = 0; i < nav_item.length; i++) {
    nav_item[i].addEventListener("click", function() {
        var current = nav_item[i];
        var list_menu_active = document.getElementsByClassName('active');
        if (list_menu_active.length) {
            for (let i = 0; i < list_menu_active.length; i++) {
                if (current == list_menu_active[i]) { continue };
                list_menu_active[i].classList.remove('active');
            }
        }
        
        if(current.classList.contains('active')){
           current.classList.remove('active'); 
        }
        else {
            current.classList.add('active');
        }
    })
}
// Go to Top
var toTop = document.getElementById("goto-top");
   // window.onscroll = function(){
   //  if(document.body.scrollToTop>20 || document.documentElement.scrollToTop >20){
   //      toTop.style.display = "block";
   //  }
   //  else{

   //      toTop.style.display="none";
   //  }
   // };
  toTop.addEventListener("click", function(){

  scrollToTop(500);
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
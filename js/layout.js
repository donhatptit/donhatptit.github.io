// Mobile: Menu CanVas
var menuButton = document.getElementById("icon-nav");
let navTag = document.getElementsByTagName("nav")[0];
var closeButton = document.getElementsByClassName("close-nav-mobile")[0];

if (window.outerWidth <= 768) {
    // layerOpacity.style.height = document.getElementsByTagName('body')[0].clientHeight + "px";
}

// menuButton.onclick = function() {
//     navTag.style.marginLeft = "0";
//     layerOpacity.style.marginLeft = "0";
//     document.getElementsByTagName('body')[0].style.overflow = "hidden";
// }

// closeButton.onclick = function() {
//     navTag.style.marginLeft = `-${0.7 * document.getElementsByTagName('body')[0].clientWidth}px`;
//     layerOpacity.style.marginLeft = "-100%";
//     document.getElementsByTagName('body')[0].style.overflow = "unset";
// }

// Mobile: Menu Accordion
// var dropdown_menu = document.getElementsByClassName("dropdown-menu");
// var iconPlus = document.getElementsByClassName("icon-plus");
// var iconMinus = document.getElementsByClassName("icon-minus");

// for (let i = 0; i < subMenu.length; i++) {
//     subMenu[i].addEventListener("click", function() {
//         var current = subMenu[i];
//         var list_menu_active = document.getElementsByClassName('menu-active');
//         if (list_menu_active.length) {
//             for (let i = 0; i < list_menu_active.length; i++) {
//                 if (current == list_menu_active[i]) { continue };
//                 list_menu_active[i].classList.remove('menu-active');
//             }
//         }
        
//         if(current.classList.contains('menu-active')){
//            current.classList.remove('menu-active'); 
//         }
//         else {
//             current.classList.add('menu-active');
//         }
//     })
// }
// menu scroll

const touch_icon = document.querySelector(".bx-menu");
const menu = document.querySelector(".nav_menu");

if (touch_icon && menu) {
  touch_icon.addEventListener("click", () => {
    menu.classList.toggle("nav_menu_scroll");
  });
}

// scroll top

window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll_top");
  if (this.scrollY >= 560) {
    scroll.classList.add("scroll_visible");
  } else {
    scroll.classList.remove("scroll_visible");
  }
});

window.addEventListener("scroll", () => {
    var head = document.querySelector('.header');
    "use strict";
    if (this.scrollY >= 100 ) {
        head.classList.add("change");
        // head.classList.remove("not_change");
    } 
    else {
        // head.classList.add("change");
        head.classList.remove("change");
    }
});



// scroll reveal

const scroll = ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 2000,
  reset: true
});
scroll.reveal(`.home_container,.home_img,.about_container,.about_img,.services_container,.menu_content,.app_container,.app_img`,{internal:200})
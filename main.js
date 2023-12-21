let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

var swiper = new Swiper(".home", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 50000000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

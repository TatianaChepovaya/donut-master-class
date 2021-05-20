; (() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})();

$('.menu__link').on('click', function(){
  $('.menu__container').removeClass("is-open");
$('.menu__button').removeClass("is-open");
});

$(document).ready(function () {
  $('.btn-wrap').click(function (event) {
    $('.thx-modal').removeClass('modal-active');
  });
});
// Menu mobile
const menuItems = document.querySelector('.header_menu_items');
const navToggle = document.querySelector('.mobile_nav_toggle');

navToggle.addEventListener('click', () => {
  const visibility = menuItems.getAttribute('data-visible');

  if (visibility === 'false') {
    menuItems.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    menuItems.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
// close tab
document.addEventListener('click', (event) => {
  const isClickInside =
    menuItems.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInside) {
    menuItems.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Nav menu
const menuAtivo = document.querySelectorAll('.header_menu li');
// menu active
function ativarMenu(ativar) {
  const url = location.href;
  const href = menuAtivo.href;
  if (url == href) {
    ativar.classList.add('active');
  }
}
// scroll sticky
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction(e) {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo img');
  const color_a = document.querySelector('.header_menu_items');
  const button = document.querySelector('.mobile_nav_toggle');

  // document.getElementsByClassName('logo img');
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('header_sticky');
    logo.classList.remove('filter_svg');
    color_a.classList.remove('color_a');
    button.classList.remove('filter_svg');
  } else {
    header.classList.remove('header_sticky');
    logo.classList.add('filter_svg');
    color_a.classList.add('color_a');
    button.classList.add('filter_svg');
  }
}

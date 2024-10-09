// Menu mobile
const menuItems = document.querySelector('.header_menu_items');
const navToggle = document.querySelector('.mobile_nav_toggle');
let isMenuOpen = false; // Para controlar o estado do menu

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen; // Alterna o estado
  menuItems.setAttribute('data-visible', isMenuOpen);
  navToggle.setAttribute('aria-expanded', isMenuOpen);

  // Bloquear/desbloquear scroll
  if (isMenuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

// Use apenas touchstart ou click, não ambos
navToggle.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do toque
  toggleMenu();
});
navToggle.addEventListener('click', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do clique
  toggleMenu();
});

// Close tab when clicking outside
document.addEventListener('click', (event) => {
  const isClickInside =
    menuItems.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInside) {
    isMenuOpen = false; // Reseta o estado
    menuItems.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.classList.remove('no-scroll');
  }
});

// Nav menu
const menuAtivo = document.querySelectorAll('.header_menu li');

menuAtivo.forEach((item) => {
  ativarMenu(item);
});

function ativarMenu(item) {
  const url = location.href;
  const href = item.querySelector('a').href;
  if (url === href) {
    item.classList.add('active');
  }
}

// Scroll sticky
window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo img');
  const color_a = document.querySelector('.header_menu_items');
  const button = document.querySelector('.mobile_nav_toggle');

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
// ===============================================

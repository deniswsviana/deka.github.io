const headerMenu = document.querySelector(".header_menu_items");
const fontSize = {
  xs1: 'font-1-xs',
  xs2: 'font-2-xs',
  s1: 'font-1-s',
  s2: 'font-2-s',
  m1: 'font-1-m',
  m1b: 'font-1-m-b',
  m2: 'font-2-m',
  l1: 'font-1-l',
  l2: 'font-2-l',
  l2b: 'font-2-l-b'


}


function checkScreenWidth() {
  const ul = document.querySelector('ul');
  const isWithinRange = window.innerWidth <= 880 && window.innerWidth >= 560;

  if (isWithinRange && !ul.classList.contains('font-2-m')) {
    // Se estiver dentro do intervalo e a classe 'font-2-m' ainda não foi aplicada
    ul.classList.remove('font-1-m');
    ul.classList.add('font-2-m');
  } else if (!isWithinRange && !ul.classList.contains('font-1-m')) {
    // Se estiver fora do intervalo e a classe 'font-1-m' ainda não foi aplicada
    ul.classList.remove('font-2-m');
    ul.classList.add('font-1-m');
  }
}

// Verifica a largura da tela ao carregar a página
checkScreenWidth();

// Verifica a largura da tela ao redimensionar a janela
window.addEventListener('resize', checkScreenWidth);

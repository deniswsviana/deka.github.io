const menuItems = document.querySelector(".header-menu-items");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () =>{
    const visibility  = menuItems.getAttribute('data-visible')

    if(visibility === 'false'){
        menuItems.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else if (visibility === 'true'){
        menuItems.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
})
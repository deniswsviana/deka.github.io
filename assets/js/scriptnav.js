const menuItems = document.querySelector(".header_menu_items");
const navToggle = document.querySelector(".mobile_nav_toggle");

navToggle.addEventListener('click', () => {
    const visibility = menuItems.getAttribute('data-visible')

    if (visibility === 'false') {
        menuItems.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        menuItems.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
})
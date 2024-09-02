// header active
const headerActive = document.querySelectorAll(".header__menu_items li a");
const mouseEnter = document.querySelectorAll(".header__menu");

function activeHeader(active) {
  const href = active.href;
  const url = location.href;

  mouseEnter.forEach((mouse) => {
    mouse.addEventListener("mouseover", (e) => {
      active.classList.remove("active");
    });
  });
  mouseEnter.forEach((mouse) => {
    mouse.addEventListener("mouseleave", (e) => {
      if (href.includes(url)) {
        active.classList.add("active");
      }
    });
  });

  if (href.includes(url)) {
    active.classList.toggle("active");
  }
}

headerActive.forEach(activeHeader);

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
  let header = select("#header");
  let offset = header.offsetHeight;

  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};

/**
 * Header fixed top on scroll
 */
const selectHeader = document.querySelectorAll("#header");
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop;
  let nextElement = selectHeader.nextElementSibling;

  const headerFixed = () => {
    if (headerOffset - window.scrollY <= 0) {
      selectHeader.classList.add("fixed-top");
      nextElement.classList.add("scrolled-offset");
    }
  };
  window.addEventListener("load", headerFixed);
  onscroll(document, headerFixed);
}

// simple anime
if (window.SimpleAnime) {
  new SimpleAnime();
}

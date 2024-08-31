  
  
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
    let selectHeader = select("#header");
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("fixed-top");
          nextElement.classList.add("scrolled-offset");
        } else {
          selectHeader.classList.remove("fixed-top");
          nextElement.classList.remove("scrolled-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      onscroll(document, headerFixed);
    }
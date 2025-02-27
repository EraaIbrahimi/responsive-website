const selectors = {
  menuIcon: ".header__menu-overlay--icon",
  closeMenuIcon: ".menu-overlay__close-btn",
  menu: ".menu-overlay",
  links: ".menu-overlay__nav-list",
  downloadLink: ".menu-overlay__link",
};

const menuIconEL = document.querySelector(selectors.menuIcon);
const closeMenuIconEL = document.querySelector(selectors.closeMenuIcon);
const menuEL = document.querySelector(selectors.menu);
const linksEL = document.querySelectorAll(selectors.links);
const downloadLinkEl = document.querySelector(selectors.downloadLink);

const toggleDisplayVisibility = () => menuEL.classList.toggle("hidden");

[menuIconEL, closeMenuIconEL, ...linksEL, downloadLinkEl].forEach((element) => {
  element.addEventListener("click", toggleDisplayVisibility);
});

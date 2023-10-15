"use strick";
// Navbar link active style
const menuItems = document.querySelectorAll("a");
const activePage = window.location.pathname;

menuItems.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

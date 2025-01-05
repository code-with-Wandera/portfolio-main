const currentYear = document.querySelector("#current-year");
const toggleSideNavBtn = document.querySelector(".toggle-side-nav-btn");
const sideNav = document.querySelector(".side-nav");

currentYear.textContent = new Date().getFullYear();

toggleSideNavBtn.addEventListener("click", () => {
  toggleSideNavBtn.classList.toggle("close-side-nav-btn");
  sideNav.classList.toggle("show-side-nav");
});

sideNav.addEventListener("click", () => {
  toggleSideNavBtn.classList.toggle("close-side-nav-btn");
  sideNav.classList.toggle("show-side-nav");
});

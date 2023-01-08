let flyToggleButton = document.getElementById("header__mobilenav-btn");
let flyMenu = document.getElementById("header__mobilenav");

flyToggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  flyMenu.classList.toggle("open");
})
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("theme-light");
}


document.getElementById("cta").addEventListener("click", function () {
  alert("Nice! Buttons provide visual and motion feedback via CSS.");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("hidden");
});

document.querySelectorAll(".dropdownButton").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = button.nextElementSibling;
    menu.classList.toggle("hidden");

    document.querySelectorAll(".dropdownMenu").forEach((dropdown) => {
      if (dropdown !== menu) {
        dropdown.classList.add("hidden");
      }
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdownMenu").forEach((menu) => {
    menu.classList.add("hidden");
  });
});
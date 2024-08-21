window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("py-4", "shadow");
    header.classList.remove("py-7");
  } else {
    header.classList.remove("py-4", "shadow");
    header.classList.add("py-7");
  }
});

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
//TOGGLE DARK LIGHT
let elementToggleDark = document.getElementById("toggleDark");
let elementToggleLight = document.getElementById("toggleLight");
let elementsImgLight = document.querySelectorAll(".img-light");
let elementsImgDark = document.querySelectorAll(".img-dark");
let elementBody = document.getElementById("body");
function toggleElements() {
  elementBody.classList.toggle("dark");
  elementBody.classList.toggle("bg-dark");
  elementToggleDark.classList.toggle("hidden");
  elementToggleLight.classList.toggle("hidden");
  elementsImgLight.forEach((img) => img.classList.toggle("hidden"));
  elementsImgDark.forEach((img) => img.classList.toggle("hidden"));
}

elementToggleDark.onclick = toggleElements;
elementToggleLight.onclick = toggleElements;

//FEATURE
let elementTabItem1 = document.getElementById("tabItem1");
let elementTabItem2 = document.getElementById("tabItem2");
let elementTabItem3 = document.getElementById("tabItem3");
elementTabItem1.onclick = function () {
  elementTabItem2.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem3.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem1.classList.add(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
};
elementTabItem2.onclick = function () {
  elementTabItem1.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem3.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem2.classList.add(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
};
elementTabItem3.onclick = function () {
  elementTabItem1.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem2.classList.remove(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
  elementTabItem3.classList.add(
    "w-full",
    "relative",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:h-1",
    "before:w-full",
    "before:rounded-tl-[4px]",
    "before:rounded-tr-[4px]",
    "before:bg-primary"
  );
};

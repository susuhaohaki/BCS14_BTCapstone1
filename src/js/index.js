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
// let elementToggleDarkLight = document.getElementById("toggleDarkLight");
// let elementHtml = document.getElementById("html");
// elementToggleDarkLight.onclick = function () {
//   elementHtml.classList.toggle("dark");
// };
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("toggleDarkLight");

  // Check for saved user preference in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.classList.add(currentTheme);
  }

  themeToggleButton.addEventListener("click", () => {
    // Toggle the dark mode class
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

//FEATURE
let elementTabItem1 = document.getElementById("tabItem1");
let elementTabItem2 = document.getElementById("tabItem2");
let elementTabItem3 = document.getElementById("tabItem3");

let tabItems = [elementTabItem1, elementTabItem2, elementTabItem3];
let activeClasses = [
  "w-full",
  "relative",
  "before:absolute",
  "before:bottom-0",
  "before:left-0",
  "before:h-1",
  "before:w-full",
  "before:rounded-tl-[4px]",
  "before:rounded-tr-[4px]",
  "before:bg-primary",
];

function setActiveTab(activeItem) {
  tabItems.forEach((item) => item.classList.remove(...activeClasses));
  activeItem.classList.add(...activeClasses);
}

elementTabItem1.onclick = () => setActiveTab(elementTabItem1);
elementTabItem2.onclick = () => setActiveTab(elementTabItem2);
elementTabItem3.onclick = () => setActiveTab(elementTabItem3);

//FAQS
let elementFaqsRightDesc1 = document.querySelector(".faqs__right-desc1");
let elementFaqsRightDesc2 = document.querySelector(".faqs__right-desc2");
let elementFaqsRightDesc3 = document.querySelector(".faqs__right-desc3");
let elementFaqsRightItem1 = document.querySelector(".faqs__right-item1");
let elementFaqsRightItem2 = document.querySelector(".faqs__right-item2");
let elementFaqsRightItem3 = document.querySelector(".faqs__right-item3");
let elementthePlus1 = document.querySelector(".plus1");
let elementthePlus2 = document.querySelector(".plus2");
let elementthePlus3 = document.querySelector(".plus3");
let elementtheMinus1 = document.querySelector(".minus1");
let elementtheMinus2 = document.querySelector(".minus2");
let elementtheMinus3 = document.querySelector(".minus3");
elementFaqsRightItem1.onclick = function () {
  elementFaqsRightDesc1.classList.toggle("hidden");
  elementthePlus1.classList.toggle("hidden");
  elementtheMinus1.classList.toggle("hidden");
};
elementFaqsRightItem2.onclick = function () {
  elementFaqsRightDesc2.classList.toggle("hidden");
  elementthePlus2.classList.toggle("hidden");
  elementtheMinus2.classList.toggle("hidden");
};
elementFaqsRightItem3.onclick = function () {
  elementFaqsRightDesc3.classList.toggle("hidden");
  elementthePlus3.classList.toggle("hidden");
  elementtheMinus3.classList.toggle("hidden");
};

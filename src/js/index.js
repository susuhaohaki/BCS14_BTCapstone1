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

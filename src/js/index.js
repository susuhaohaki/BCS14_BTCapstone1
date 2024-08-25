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

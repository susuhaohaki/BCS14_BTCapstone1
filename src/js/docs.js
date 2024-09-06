// Lấy tất cả các phần tử tab
let tabs = [
  document.getElementById("bootstrap-template-tab"),
  document.getElementById("contact-form-tab"),
  document.getElementById("style-guide-tab"),
  document.getElementById("tailwind-components-tab"),
  document.getElementById("tailwind-templates-tab"),
];

// Lấy tất cả các div chi tiết tương ứng với từng tab
let details = [
  document.getElementById("bootstrap-template-detail"),
  document.getElementById("contact-form-detail"),
  document.getElementById("style-guide-detail"),
  document.getElementById("tailwind-components-detail"),
  document.getElementById("tailwind-templates-detail"),
];

// Lấy div "welcome-detail"
let welcomeDetail = document.getElementById("welcome-detail");

// Hàm xử lý sự kiện click cho từng tab
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    // Ẩn div "welcome-detail"
    welcomeDetail.classList.add("hidden");

    // Xóa class active và ẩn nội dung của tất cả các tab
    tabs.forEach((t) => {
      t.classList.remove("bg-stroke", "dark:bg-blackho");
      t.classList.add("bg-white", "dark:bg-dark");
    });
    details.forEach((detail) => {
      detail.classList.add("hidden");
    });

    // Thêm class active cho tab được click và hiển thị nội dung chi tiết tương ứng
    tab.classList.remove("bg-white", "dark:bg-dark");
    tab.classList.add("bg-stroke", "dark:bg-blackho");
    details[index].classList.remove("hidden");
  });
});

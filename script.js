let slideIndex = 0;
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev");
    if (i === n) {
      slide.classList.add("active");
    } else if (i === (n - 1 + slides.length) % slides.length) {
      slide.classList.add("prev");
    }
  });

  dots.forEach((dot) => dot.classList.remove("active-dot"));
  dots[n].classList.add("active-dot");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

setInterval(nextSlide, 5000);

//textBox
function toggleText() {
  const box = document.getElementById("textBox");
  const btn = box.querySelector(".toggle-btn");

  box.classList.toggle("expanded");

  if (box.classList.contains("expanded")) {
    btn.textContent = "بستن";
  } else {
    btn.textContent = "مشاهده بیشتر";
  }
}

//arrow slider//

var slider = document.getElementById("slider");
var offset = 0;

// تابع حرکت اسلایدر
function slide(direction) {
  // جهت حرکت: 1 یا -1
  offset += direction * 220; // عرض حدودی هر کارت + فاصله
  slider.style.transform = "translateX(-" + offset + "px)";
}

//modal//
const modal = document.getElementById("modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.getElementById("closeBtn");
const phoneInput = document.getElementById("phoneInput");
const submitBtn = document.getElementById("submitBtn");

// باز کردن مودال با کلیک روی دکمه ورود
loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// بستن مودال
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// تغییر رنگ حاشیه و فعال کردن دکمه ادامه
phoneInput.addEventListener("focus", () => {
  phoneInput.style.borderColor = "#f8b4b4";
});
phoneInput.addEventListener("input", () => {
  if (phoneInput.value.length >= 11) {
    phoneInput.style.borderColor = "#ff0000";
    submitBtn.classList.add("active");
  } else {
    phoneInput.style.borderColor = "#f8b4b4";
    submitBtn.classList.remove("active");
  }
});

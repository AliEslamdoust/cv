// run codes after document loaded
document.addEventListener("DOMContentLoaded", () => {
  // run certain codes after scrolling
  window.addEventListener("scroll", () => {
    // call fixHeader function
    fixHeader();
    // call scrollspy function
    scrollSpy();
  });
  function fixHeader() {
    // change header padding
    const header = document.getElementById("about");
    let headerRect = header.getBoundingClientRect();
    let distancefromTop = headerRect.top;
    const headerMenu = document.getElementById("header");
    const headerLogo = document.getElementById("headerLogoImg");
    if (distancefromTop <= 70) {
      headerMenu.style.padding = "12px 0 12px 0";
      headerMenu.style.backgroundColor = "#222222";
      headerLogo.style.width = "108px";
    } else {
      headerMenu.style.padding = "24px 0 24px 0";
      headerMenu.style.backgroundColor = "transparent";
      headerLogo.style.width = "160px";
    }
  }
  function scrollSpy() {
    // declaring body sections (containers)
    const [
      homeContainer,
      aboutContainer,
      portfolioContainer,
      serviceContainer,
      testimonialsContainer,
      blogContainer,
      contactContainer,
    ] = [
      document.getElementById("homeContainer"),
      document.getElementById("aboutContainer"),
      document.getElementById("portfolioContainer"),
      document.getElementById("serviceContainer"),
      document.getElementById("testimonialsContainer"),
      document.getElementById("blogContainer"),
      document.getElementById("contactContainer"),
    ];
    const containers = [
      homeContainer,
      aboutContainer,
      portfolioContainer,
      serviceContainer,
      testimonialsContainer,
      blogContainer,
      contactContainer,
    ];
    for (i in containers) {
      scrollSituation(containers[i], ++i);
      i++;
    }
  }
  // change buttons classlist after certain pageContainers distance from top of the window is less than 0
  function scrollSituation(pageContainer, order) {
    var pageSituation = pageContainer.getBoundingClientRect().top;
    var headerBtn = document.querySelector(`#headerBtns :nth-child(${order})`);
    var menuBtns = document.querySelectorAll(".header-menu-item");
    if (pageSituation <= 70) {
      menuBtns.forEach((menuBtn) => {
        menuBtn.classList.remove("active");
      });
      headerBtn.classList.add("active");
    }
  }
  fixHeader();
});

// swiper js:

var swiper = new Swiper(".testimonialSlider", {
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// blog Slider
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 2,
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// dark mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

localStorage.theme = "light";

localStorage.theme = "dark";

localStorage.removeItem("theme");

// darkmode toggle
const darkBtn = document.getElementById("darkBtn");
btn.addEventListener("click", () => {
  const html = document.getElementById("html");
  html.classList.toggle("dark");
});

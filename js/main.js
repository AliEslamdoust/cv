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
    var headerMenu = document.getElementById("header");
    if (distancefromTop <= 70) {
      headerMenu.style.padding = "12px 0 12px 0";
      headerMenu.style.backgroundColor = "#222222";
    } else {
      headerMenu.style.padding = "24px 0 24px 0";
      headerMenu.style.backgroundColor = "transparent";
    }
  }
  function scrollSpy() {
    // var headerMenu;
    const [
      homeContainer,
      aboutContainer,
      portfolioContainer,
      serviceContainer,
    ] = [
      document.getElementById("homeContainer"),
      document.getElementById("aboutContainer"),
      document.getElementById("portfolioContainer"),
      document.getElementById("serviceContainer"),
    ];
    const containers = [
      homeContainer,
      aboutContainer,
      portfolioContainer,
      serviceContainer,
    ];
    for (i in containers) {
      scrollSituation(containers[i], ++i);
      i++;
      // headerMenu = document.querySelector(`#headerBtns :nth-child(${i})`);
      // console.log(headerMenu);
    }
  }
  // change buttons classlist after certain pageContainers distance from top of the window is less than 0
  function scrollSituation(pageContainer, order) {
    var pageSituation = pageContainer.getBoundingClientRect().top;
    var headerBtn = document.querySelector(`#headerBtns :nth-child(${order})`);
    var menuBtns = document.querySelectorAll(".header-menu-item");
    if (pageSituation <= 20) {
      menuBtns.forEach((menuBtn) => {
        menuBtn.classList.remove("active");
      });
      headerBtn.classList.add("active");
    } else {
      headerBtn.classList.remove("active");
    }
  }
  fixHeader();
});

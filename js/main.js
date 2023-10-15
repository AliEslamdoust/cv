document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", fixHeader);
  function fixHeader() {
    var header = document.getElementById("headerBg");
    let headerRect = header.getBoundingClientRect();
    let distancefromTop = headerRect.top;
    console.log(distancefromTop);
    if (distancefromTop <= 100) {
      document.getElementById("header").style.padding = "12px 0 12px 0";
    } else {
      document.getElementById("header").style.padding = "24px 0 24px 0";
    }
  }
  fixHeader();
});

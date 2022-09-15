const primaryNv = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-toggle");

navToggle.addEventListener("click", () => {
  const visibilty = primaryNv.getAttribute("data-visible");

  if (visibilty === "false") {
    primaryNv.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibilty === "true") {
    primaryNv.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

let indicator = document.querySelector(".indicator").children;
let main = document.querySelector(".items").children;

for (let i = 0; i < indicator.length; i++) {
  indicator[i].onclick = function () {
    for (let x = 0; x < indicator.length; x++) {
      indicator[x].classList.remove(".active");
    }
    this.classList.add(".active");
    const displayItems = this.getAttribute("data-filter");
    for (let z = 0; z < main.length; z++) {
      main[z].style.transform = "scale(0)";
      setTimeout(() => {
        main[z].style.display = "none";
      }, 300);
      if (
        main[z].getAttribute("data-category") == displayItems ||
        displayItems == "all"
      ) {
        main[z].style.transform = "scale(1)";
        setTimeout(() => {
          main[z].style.display = "block";
        }, 300);
      }
    }
  };
}

$(".owl-carousel").owlCarousel({
  loop: true,

  nav: false,
  dots: false,
  autoPlay: 5000,
  stopOnHover: true,
  singleItem: true,
  autoWidth: true,
  responsiveClass: true,
  items: 3,

  responsive: {
    0: {
      stagePadding: 0,
      loop: false,
      responsiveClass: true,
      dots: false,
      nav: true,
      autoHeight: true,
      items: 1,
    },
    480: {
      items: 2,
    },
    769: {
      items: 2,
    },
  },
});

$(document).ready(function () {
  $("#search-icon").click(function () {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
});

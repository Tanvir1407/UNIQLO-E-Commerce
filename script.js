////// mobile responsive nav menu ////////
const ToggleNav = document.querySelector(".toggle-nav-icon");
const Open = document.querySelector(".toggle-nav");
ToggleNav.addEventListener("click", function () {
  if (Open.classList.contains("d-inline")) {
    Open.classList.replace("d-inline", "d-none");
  } else {
    Open.classList.replace("d-none", "d-inline");
  }
  if (ToggleNav.classList.contains("fa-bars")) {
    ToggleNav.classList.replace("fa-bars", "fa-xmark");
  } else {
    ToggleNav.classList.replace("fa-xmark", "fa-bars");
  }
});


///////////// video popup button //////////////
const video = document.querySelector(".video-section");
const close = document.querySelector(".close");

close.addEventListener("click", function () {
  video.classList.replace("d-block", "d-none");
});

function play() {
  video.classList.replace("d-none", "d-block");
}

function stop() {
  video.classList.replace("d-block", "d-none");
  let frame = document.getElementById("videoId");
  frame.src = frame.src
}


////////// active link modify ////////////
function filterProduct(e) {
  const products = document.querySelectorAll(".list > div");
  const Allbtn = document.querySelectorAll(".Btn");
  Allbtn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  e.target.classList.add("active");
  let filter = e.target.dataset.filter;

  if (filter === "all") {
    products.forEach((product) => {
      product.classList.remove("hidden");
    });
  } else {
    products.forEach((product) => {
      product.classList.contains(filter) // does the animal have the filter in its class list?
        ? product.classList.remove("hidden") // if yes, make sure .hidden is not applied
        : product.classList.add("hidden"); // if no, apply .hidden
    });
  }
}

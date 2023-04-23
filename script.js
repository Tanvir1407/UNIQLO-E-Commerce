const ToggleNav = document.querySelector('.toggle-nav-icon');
const Open = document.querySelector('.toggle-nav');


ToggleNav.addEventListener("click", function () {
    if (Open.classList.contains('d-inline')) {
        Open.classList.replace("d-inline","d-none")
    } else {
        Open.classList.replace("d-none","d-inline")
    }
    if (ToggleNav.classList.contains('fa-bars')) {
        ToggleNav.classList.replace("fa-bars","fa-xmark")
    } else {
        ToggleNav.classList.replace("fa-xmark","fa-bars")
    }
})
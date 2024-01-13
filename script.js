const backToTop = document.getElementById('back-to-top');
window.onscroll = (e) => {
    if (window.pageYOffset > 5) {
        backToTop.style.display = "flex";
    }
    else {
        backToTop.style.display = "none";
    }
};
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
menuIcon.onclick = (e) => {
    menuIcon.parentElement.firstElementChild.classList.toggle('mobile-nav-active');
    const currentIcon = menuIcon.firstElementChild.getAttribute('name')
    const nextIcon = currentIcon=="menu" ? "x-circle" : "menu"
    menuIcon.firstElementChild.setAttribute("name",nextIcon);
};

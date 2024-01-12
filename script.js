const backToTop = document.getElementById('back-to-top');
window.onscroll = (e) => {
    if(window.pageYOffset > 5)
    {
        backToTop.style.display = "flex"
    }
    else
    {
        backToTop.style.display = "none"
    }
};
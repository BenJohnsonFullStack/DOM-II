import './less/index.less'

// NavBar Background Color Change on Scroll
const header = document.querySelector("header");
const introImg = document.querySelector(".intro img");
const h1 = document.querySelector("h1");
const navLinks = document.querySelectorAll(".nav-link");
const options = { rootMargin: "-90px" };
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.style.backgroundColor = "#303437";
            h1.style.color = "#fff";
            navLinks.forEach(element => {
                element.style.color = "#fff";
            });
        } else {
            header.style.backgroundColor = "#fff";
            h1.style.color = "#303437";
            navLinks.forEach(element => {
                element.style.color = "#303437";
            });
        }
    });
}, options);
observer.observe(introImg);
header.style.zIndex = "100";

// Zoom Page Images on Mouse-Over
const zoomImages = document.querySelectorAll(".zoom");
console.log(zoomImages);
zoomImages.forEach(element => {
    element.style.opacity = ".8";
    element.style.zIndex = "99";
});
const zoom = (evt) => {
    console.log(evt);
    zoomImages.forEach(element => {
        element.style.transform = "scale(1.1)";
        element.style.opacity = "1";
        element.style.boxShadow = "0 0 20px black";
        element.style.transition = "600ms";
    });
}
zoomImages.forEach(element => {
    element.addEventListener("mouseover", zoom)
});
const zoomOut = () => {
    zoomImages.forEach(element => {
        element.style.transform = "scale(1)";
        element.style.opacity = ".8";
        element.style.boxShadow = "none";
        element.style.transition = "450ms";
    }); 
}
zoomImages.forEach(element => {
    element.addEventListener("mouseout", zoomOut)
});
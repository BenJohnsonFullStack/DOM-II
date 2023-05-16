import './less/index.less'

// NAVBAR ON SCROLL
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

// ZOOM IMAGES
const zoomImages = document.querySelectorAll(".zoom");
console.log(zoomImages);
zoomImages.forEach(element => {
    element.style.opacity = ".8";
    element.style.zIndex = "99";
});
const zoom = (evt) => {
    evt.target.style.transform = "scale(1.1)";
    evt.target.style.opacity = "1";
    evt.target.style.boxShadow = "0 0 20px black";
    evt.target.style.transition = "600ms";
}
zoomImages.forEach(element => {
    element.addEventListener("mouseover", zoom)
});

// REVERT IMAGES WITH TRANSITION
const zoomOut = (evt) => {
    evt.target.style.transform = "scale(1)";
    evt.target.style.opacity = ".8";
    evt.target.style.boxShadow = "none";
    evt.target.style.transition = "450ms"; 
}
zoomImages.forEach(element => {
    element.addEventListener("mouseout", zoomOut)
});

// CHANGE SECTION COLOR
const colorChange = document.querySelectorAll("section");
const sectionColor = (evt) => {
    evt.target.style.backgroundColor = "#e9f1f7";
}
colorChange.forEach(element => {
    element.addEventListener("mouseover", sectionColor)
});

// REVERT SECTION COLOR
const revertColor = (evt) => {
    evt.target.style.backgroundColor = "#fff";
}
colorChange.forEach(element => {
    element.addEventListener("mouseout", revertColor)
});

// CHANGE HEADER COLORS ON CLICK
const h2 = document.querySelectorAll("h2");
const headerColor = (evt) => {
    evt.target.style.color = "red";
};
h2.forEach(element => {
    element.addEventListener("click", headerColor)
});

// INTRO IMG GRAYSCALE
const imgGrayscale = () => {
    introImg.style.filter = "grayscale(100%)";
};
window.addEventListener("load", imgGrayscale);

// CHANGE FOOTER COLOR ON KEYDOWN
const footer = document.querySelector("footer");
const changeFooter = (evt) => {
    if (evt.key === "Escape") {
        footer.style.backgroundColor = "aliceblue";
    } else if (evt.key === "a") {
    footer.style.backgroundColor = "red";
    }
};
document.addEventListener("keydown", changeFooter);

// BLEED
const bleed = () => {
    h1.style.color = "red";
    h1.style.transition = "5s";
}
h1.addEventListener("click", bleed);

const button = document.querySelector(".btn");
button.preventDefault();
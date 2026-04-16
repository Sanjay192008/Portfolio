// Typing Effect
const text = ["Aspiring Web Developer", "BCA Student", "Programmer"];
let i = 0, j = 0;

function type() {
    if (j < text[i].length) {
        document.getElementById("typing").innerHTML += text[i][j];
        j++;
        setTimeout(type, 80);
    } else {
        j = 0;
        i = (i + 1) % text.length;
        document.getElementById("typing").innerHTML = "";
        setTimeout(type, 800);
    }
}
type();

// Scroll Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
});

document.addEventListener("click", () => {
    menu.classList.remove("show");
});

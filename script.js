document.addEventListener("DOMContentLoaded", () => {

    // Welcome message in browser console
    console.log("Welcome to Dharani's Portfolio!");

    // Add a small scroll effect to the navbar
    window.addEventListener("scroll", () => {

        const header = document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.25)";
        } else {
            header.style.boxShadow = "none";
        }

    });

});
// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "fade", // Smooth fade effect
    speed: 800,
});


// Wait for the page to fully load before showing chat buttons
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("chat-container").style.display = "flex";
    }, 2000); // 1 second delay after page load
});

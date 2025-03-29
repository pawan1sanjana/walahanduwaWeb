document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup").style.display = "block";
});

function closePopup() {
    window.history.back(); // Go back to the previous page
}
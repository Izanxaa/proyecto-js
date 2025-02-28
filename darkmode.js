document.addEventListener("DOMContentLoaded", function () {
    const modeButton = document.getElementById("modeButton");
    const body = document.body;

    modeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});

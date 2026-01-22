const scrollContainer = document.getElementById("scrollContainer");

document.querySelector(".left-btn").addEventListener("click", () => {
    scrollContainer.scrollLeft -= 200;
});

document.querySelector(".right-btn").addEventListener("click", () => {
    scrollContainer.scrollLeft += 200;
});

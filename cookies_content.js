const cookieContainer = document.querySelector(".container")
const cookieButton = document.querySelector(".buttons.accept-button");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
})

setTimeout(() => {
    cookieContainer.classList.add("active");
}, 2000);
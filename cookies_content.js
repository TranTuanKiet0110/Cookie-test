const cookieContainer = document.querySelector(".wrapper")
const cookieButton = document.querySelector(".button.btn-accept");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
})

setTimeout(() => {
    cookieContainer.classList.add("active");
}, 2000);
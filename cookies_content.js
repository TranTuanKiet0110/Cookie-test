let cookieModal = document.querySelector(".wrapper");
let acceptCookieBtn = document.querySelector(".btn-accept");

acceptCookieBtn.addEventListener("click",function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted","yes")
})


setTimeout(function(){
    cookieModal.classList.add("active")
},2000)
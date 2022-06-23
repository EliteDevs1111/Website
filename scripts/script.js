const toggle = document.getElementsByClassName("burger-nav")[0]
const navbar_links = document.getElementsByClassName("collapse")[0]

toggle.addEventListener('click' ,() => {
    navbar_links.classList.toggle("active")
})


const smtp = window.smtp;


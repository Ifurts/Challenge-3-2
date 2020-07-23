const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const linkId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${linkId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
   modalOverlay.classList.remove("active")
})

const modal = document.querySelector('.modal');

document.querySelector(".maximize-buttom").addEventListener("click", function() {
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized")
   
    } else {
        modal.classList.add("maximized")

    }
})



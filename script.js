
const modalOverlay = document.querySelector('#modal-overlay');
const cards = document.querySelectorAll('.card');


for(let card of cards){

  card.addEventListener("click" , function() {    

    modalOverlay.classList.add("active");

    const imagem = card.querySelector("img").src;
    
    modalOverlay.querySelector("h3").innerHTML = card.querySelector("h3").textContent;

    modalOverlay.querySelector("p").innerHTML = card.querySelector("p").textContent;
    
    modalOverlay.querySelector("img").src = imagem;

  })
}

document.querySelector('#close').addEventListener('click' , function() {

  modalOverlay.classList.remove("active");
  

});

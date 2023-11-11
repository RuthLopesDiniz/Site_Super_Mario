let formulario = document.querySelector(".fale_conosco")
let mascara = document.querySelector(".mascaraAll")

function cliqueButton(){
    formulario.style.left = "650px"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}
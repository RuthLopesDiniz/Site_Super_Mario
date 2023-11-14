let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascaraAll")

function cliqueButton(){
   
        formulario.style.left = "50%"
        formulario.style.transform = "translateX(-50%)";
        mascara.style.visibility = "visible"
    }



function esconderForm(){
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}
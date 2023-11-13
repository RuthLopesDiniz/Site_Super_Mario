let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascaraAll")

function cliqueButton(){
    formulario.style.left = "auto"
    mascara.style.visibility = "visible"

    if(formulario.style.left = "-250px"){
        
        formulario.style.left = "auto"
        formulario.style.top = "25%"
        mascara.style.visibility = "visible"
        console.log("Aplicando responsividade")
    }
}


function esconderForm(){
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}
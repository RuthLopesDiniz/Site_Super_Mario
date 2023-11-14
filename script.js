let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascaraAll")

function cliqueButton(){
    
        
        formulario.style.left = "20%"
        mascara.style.visibility = "visible"
        console.log("Aplicando responsividade")
    }



function esconderForm(){
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}
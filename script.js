let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascaraAll")

function cliqueButton(){
    formulario.style.left = "auto"
    mascara.style.visibility = "visible"

    if(formulario.style.left = "-250px"){//se o estilo do formulário na esqueda for -250px, ele está em tela de celular e 
        //vai aplicar as sequintes configurações específicas para essas telas.
        
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